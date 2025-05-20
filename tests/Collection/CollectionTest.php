<?php

namespace Vietiso\Tests\Collection;

use BadMethodCallException;
use PHPUnit\Framework\TestCase;
use Vietiso\Core\Collection\Collection;
use Vietiso\Core\Collection\ItemNotFoundException;
use Vietiso\Core\Collection\LazyCollection;
use Vietiso\Core\Collection\MultipleItemsFoundException;

final class CollectionTest extends TestCase
{
    public function testCollect(): void
    {
        $collection = collect([1, 2, 3]);
        $this->assertEquals($collection->collect()->all(), $collection->all());
    }

    public function testMethodAll(): void
    {
        $array = [1, 2, 3];
        $collection = collect($array);
        $this->assertEquals($collection->all(), $array);
    }

    public function testMake(): void
    {
        $array = [1, 2, 3];
        $collection = Collection::make($array);
        $this->assertEquals($collection->all(), $array);
    }

    public function testRange(): void
    {
        $collection = Collection::range(1, 10);
        $this->assertEquals($collection->all(), range(1, 10));
        
        $collection = Collection::range(1, 10, 2);
        $this->assertEquals($collection->all(), range(1, 10, 2));
    }

    public function testGet(): void
    {
        $collection = collect(['name' => 'Thuan', 'framework' => 'Penguin']);
 
        $this->assertEquals($collection->get(key: 'name'), 'Thuan');

        $age = 23;
        $this->assertEquals($collection->get(key: 'age', default: $age), $age);

        $email = 'thuan@example';
        $this->assertEquals($collection->get(key: 'email', default: function () use ($email) {
            return $email;
        }), $email);
    }

    public function testHas(): void
    {
        $collection = collect(['name' => 'Thuan', 'framework' => 'Penguin', 'collaborators' => null]);

        $this->assertFalse($collection->has('age'));

        $this->assertTrue($collection->has('collaborators'));
        
        $this->assertTrue($collection->has('name', 'framework'));
        
        $this->assertFalse($collection->has('name', 'age'));
    }

    public function testHasAny(): void
    {
        $collection = collect(['name' => 'Thuan', 'framework' => 'Penguin']);

        $this->assertFalse($collection->hasAny('collaborators'));
        
        $this->assertTrue($collection->hasAny('name', 'collaborators'));
    }

    public function testPush(): void
    {
        $collection = collect([1, 2, 3, 4]);
        $collection->push(5);
        $this->assertEquals($collection->all(), range(1, 5));
    }

    public function testPrepend(): void
    {
        $collection = collect([1, 2, 3, 4, 5]);
        $collection->prepend(0);
        $this->assertEquals($collection->all(), range(0, 5));

        $array = ['one' => 1, 'two' => 2];
        $collection = collect($array);
        $collection->prepend(0, 'zero');
        $this->assertEquals($collection->all(), ['zero' => 0, ...$array]);
    }
    
    public function testPut(): void
    {
        $array = ['product_id' => 1, 'name' => 'Desk'];
        $collection = collect($array);
        $collection->put('price', 100);
        $this->assertEquals($collection->all(), [...$array, 'price' => 100]);
    }

    public function testPop(): void
    {
        $array = [];
        $collection = collect($array);
        $this->assertEquals($collection->pop(2), collect());

        $array = [1, 2, 3, 4, 5];
        $result = 5;
        $collection = collect($array);
        $this->assertEquals($collection->pop(), $result);

        $result = [5, 4, 3];
        $collection = collect($array);
        $this->assertEquals($collection->pop(3)->all(), $result);
    }

    public function testForget(): void
    {
        $array = ['name' => 'Thuan', 'framework' => 'Penguin'];
        $collection = collect($array);

        $result = $array;
        unset($result['name']);
        $this->assertEquals($collection->forget(['name'])->all(), $result);
    }

    public function testExcept(): void
    {
        $collection = collect(['product_id' => 1, 'price' => 100, 'discount' => false]);
        $filtered = $collection->except(['price', 'discount']);

        $result = ['product_id' => 1];
        $this->assertEquals($filtered->all(), $result);
    }

    public function testPull(): void
    {
        $collection = collect(['product_id' => 'prod-100', 'name' => 'Desk']);
        
        $this->assertEquals($collection->pull('name'), 'Desk');
        $this->assertEquals($collection->all(), ['product_id' => 'prod-100']);
    }

    public function testKeys(): void
    {
        $array = [
            'prod-100' => ['product_id' => 'prod-100', 'name' => 'Desk'],
            'prod-200' => ['product_id' => 'prod-200', 'name' => 'Chair']
        ];
        $collection = collect($array);
        $keys = $collection->keys();
        $this->assertEquals($keys->all(), array_keys($array));
    }

    public function testKeyBy(): void
    {
        $array = [
            'prod-100' => ['product_id' => 'prod-100', 'name' => 'Desk'],
            'prod-200' => ['product_id' => 'prod-200', 'name' => 'Chair']
        ];
        $collection = collect($array);
        $keyed = $collection->keyBy('product_id');
        
        $result = [
            'prod-100' => ['product_id' => 'prod-100', 'name' => 'Desk'],
            'prod-200' => ['product_id' => 'prod-200', 'name' => 'Chair']
        ];
        $this->assertEquals($keyed->all(), $result);

        $result = [
            'PROD-100' => ['product_id' => 'prod-100', 'name' => 'Desk'],
            'PROD-200' => ['product_id' => 'prod-200', 'name' => 'Chair']
        ];
        $keyed = $collection->keyBy(function (array $item) {
            return strtoupper($item['product_id']);
        });
        $this->assertEquals($keyed->all(), $result);
    }

    public function testValues(): void
    {
        $collection = collect([
            10 => ['product' => 'Desk', 'price' => 200],
            11 => ['product' => 'Desk', 'price' => 200],
        ]);
        $values = $collection->values();

        $result = [
            ['product' => 'Desk', 'price' => 200],
            ['product' => 'Desk', 'price' => 200]
        ];
        $this->assertEquals($values->all(), $result);
    }

    public function testCountBy(): void
    {
        $collection = collect([1, 2, 2, 2, 3]);
        $counted = $collection->countBy();

        $result = [1 => 1, 2 => 3, 3 => 1];
        $this->assertEquals($counted->all(), $result);
        
        $collection = collect(['alice@gmail.com', 'bob@yahoo.com', 'carlos@gmail.com']);   
        $counted = $collection->countBy(function (string $email) {
            return substr(strrchr($email, "@"), 1);
        });
        
        $result = ['gmail.com' => 2, 'yahoo.com' => 1];
        $this->assertEquals($counted->all(), $result);
    }
    
    public function testAvg(): void
    {
        $collection = collect([
            ['foo' => 10],
            ['foo' => 10],
            ['foo' => 20],
            ['foo' => 40]
        ]);

        $this->assertEquals($collection->avg('foo'), 20);
        
        $this->assertEquals(collect([1, 1, 2, 4])->avg(), 2);
    }
    
    public function testMax(): void
    {
        $this->assertEquals(collect([1, 2, 3, 4, 5])->max(), 5);


        $collection = collect([
            ['foo' => 10],
            ['foo' => 20]
        ]);

        $this->assertEquals($collection->max('foo'), 20);
        
        $this->assertEquals($collection->max(function ($item) {
            return $item['foo'] / 2;
        }), 10);


        $collection = collect([
            ['user_id' => 1, 'detailts' => [
                'weight' => 70,
                'height' => 175
            ]],
            ['user_id' => 2, 'detailts' => [
                'weight' => 60,
                'height' => 176
            ]],
        ]);

        $this->assertEquals($collection->max('detailts.weight'), 70);
    }

    public function testMin(): void
    {
        $this->assertEquals(collect([1, 2, 3, 4, 5])->min(), 1);


        $collection = collect([
            ['foo' => 10],
            ['foo' => 20]
        ]);

        $this->assertEquals($collection->min('foo'), 10);
        
        $this->assertEquals($collection->min(function ($item) {
            return $item['foo'] / 2;
        }), 5);


        $collection = collect([
            ['user_id' => 1, 'detailts' => [
                'weight' => 70,
                'height' => 175
            ]],
            ['user_id' => 2, 'detailts' => [
                'weight' => 60,
                'height' => 176
            ]],
        ]);

        $this->assertEquals($collection->min('detailts.weight'), 60);
    }

    public function testMedian(): void
    {
        $this->assertEquals(collect([1, 2, 3, 4, 5])->median(), 3);


        $collection = collect([
            ['foo' => 10],
            ['foo' => 20]
        ]);

        $this->assertEquals($collection->median('foo'), 15);

        $this->assertEquals($collection->median(function ($item) {
            return $item['foo'] / 2;
        }), 7.5);


        $collection = collect([
            ['user_id' => 1, 'detailts' => [
                'weight' => 70,
                'height' => 175
            ]],
            ['user_id' => 2, 'detailts' => [
                'weight' => 60,
                'height' => 176
            ]],
        ]);

        $this->assertEquals($collection->median('detailts.weight'), 65);
    }

    public function testMode(): void
    {
        $collection = collect([
            ['foo' => 10],
            ['foo' => 10],
            ['foo' => 20],
            ['foo' => 40]
        ]);
        $this->assertEquals($collection->mode('foo'), [10]);

        $this->assertEquals(collect([1, 1, 2, 4])->mode(), [1]);
        
        $this->assertEquals(collect([1, 1, 2, 2])->mode(), [1, 2]);
    }

    public function testMerge(): void
    {
        $collection = collect(['product_id' => 1, 'price' => 100]); 
        $merged = $collection->merge(['price' => 200, 'discount' => false]);
        $this->assertEquals($merged->all(), ['product_id' => 1, 'price' => 200, 'discount' => false]);

        $collection = collect(['Desk', 'Chair']);
        $merged = $collection->merge(['Bookcase', 'Door']);
        $this->assertEquals($merged->all(), ['Desk', 'Chair', 'Bookcase', 'Door']);
    }

    public function testMergeRecursive(): void
    {
        $collection = collect(['product_id' => 1, 'price' => 100]);
        $merged = $collection->mergeRecursive([
            'product_id' => 2,
            'price' => 200,
            'discount' => false
        ]);

        $this->assertEquals(
            $merged->all(),
            ['product_id' => [1, 2], 'price' => [100, 200], 'discount' => false]
        );
    }

    public function testMap(): void
    {
        $collection = collect([1, 2, 3, 4, 5]);
        $multiplied = $collection->map(function (int $item, int $key) {
            return $item * 2;
        });
        $this->assertEquals($multiplied->all(), [2, 4, 6, 8, 10]);
    }

    public function testMapSpread(): void
    {
        $multiplied = collect([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])->chunk(2)->mapSpread(function (int $even, int $odd) {
            return $even + $odd;
        });
        $this->assertEquals($multiplied->all(), [1, 5, 9, 13, 17]);
    }

    public function testFlip(): void
    {
        $collection = collect(['name' => 'thuan', 'framework' => 'penguin']);
        $flipped = $collection->flip();
        $this->assertEquals($flipped->all(), ['thuan' => 'name', 'penguin' => 'framework']);
    }

    public function testTransform(): void
    {
        $collection = collect([1, 2, 3, 4, 5]);
        $collection->transform(function (int $item, int $key) {
            return $item * 2;
        });
        $this->assertEquals($collection->all(), [2, 4, 6, 8, 10]);
    }

    public function testTake(): void
    {
        $collection = collect([0, 1, 2, 3, 4, 5]);
        $chunk = $collection->take(3);
        $this->assertEquals($chunk->all(), [0, 1, 2]);
        
        $collection = collect([0, 1, 2, 3, 4, 5]);
        $chunk = $collection->take(-2);
        $this->assertEquals($chunk->all(), [4, 5]);
    }

    public function testUnion(): void
    {
        $collection = collect([1 => ['a'], 2 => ['b']]);
        $union = $collection->union([3 => ['c'], 1 => ['d']]);
        $this->assertEquals($union->all(), [1 => ['a'], 2 => ['b'], 3 => ['c']]);
    }

    public function testUnique(): void
    {
        $collection = collect([1, 1, 2, 2, 3, 4, 2]);
        $unique = $collection->unique();
        $this->assertEquals($unique->values()->all(), [1, 2, 3, 4]);

        $collection = collect([
            ['name' => 'iPhone 6', 'brand' => 'Apple', 'type' => 'phone'],
            ['name' => 'iPhone 5', 'brand' => 'Apple', 'type' => 'phone'],
            ['name' => 'Apple Watch', 'brand' => 'Apple', 'type' => 'watch'],
            ['name' => 'Galaxy S6', 'brand' => 'Samsung', 'type' => 'phone'],
            ['name' => 'Galaxy Gear', 'brand' => 'Samsung', 'type' => 'watch'],
        ]);
        $unique = $collection->unique('brand');
        $this->assertEquals(
            $unique->values()->all(), [
                ['name' => 'iPhone 6', 'brand' => 'Apple', 'type' => 'phone'],
                ['name' => 'Galaxy S6', 'brand' => 'Samsung', 'type' => 'phone']
            ]
        );

        $unique = $collection->unique(function (array $item) {
            return $item['brand'].$item['type'];
        });
        $this->assertEquals(
            $unique->values()->all(), [
                ['name' => 'iPhone 6', 'brand' => 'Apple', 'type' => 'phone'],
                ['name' => 'Apple Watch', 'brand' => 'Apple', 'type' => 'watch'],
                ['name' => 'Galaxy S6', 'brand' => 'Samsung', 'type' => 'phone'],
                ['name' => 'Galaxy Gear', 'brand' => 'Samsung', 'type' => 'watch']
            ]
        );
    }

    public function testUniqueStrict(): void
    {
        $collection = collect([1, 1, 2, 2, 3, 4, '2']);
        $unique = $collection->uniqueStrict();
        $this->assertEquals($unique->values()->all(), [1, 2, 3, 4, '2']);
    }

    public function testPad(): void
    {
        $collection = collect(['A', 'B', 'C']);
        $filtered = $collection->pad(5, 0);
        $this->assertEquals($filtered->all(), ['A', 'B', 'C', 0, 0]);

        $filtered = $collection->pad(-5, 0);
        $this->assertEquals($filtered->all(), [0, 0, 'A', 'B', 'C']);
    }

    public function testPluck(): void
    {
        $collection = collect([
            ['product_id' => 'prod-100', 'name' => 'Desk'],
            ['product_id' => 'prod-200', 'name' => 'Chair'],
        ]);
        $plucked = $collection->pluck('name');
        $this->assertEquals($plucked->all(), ['Desk', 'Chair']);

        $plucked = $collection->pluck('name', 'product_id');
        $this->assertEquals($plucked->all(), ['prod-100' => 'Desk', 'prod-200' => 'Chair']);

        $collection = collect([
            [
                'name' => 'Penguin',
                'releases' => [
                    '1x' => ['1.0', '1.1'],
                ],
            ],
            [
                'name' => 'Example',
                'releases' => [
                    '1x' => ['1.2', '1.3'],
                ],
            ],
        ]);
         
        $plucked = $collection->pluck('releases.1x');
        $this->assertEquals($plucked->all(), [
            ['1.0', '1.1'],
            ['1.2', '1.3']
        ]);

        $collection = collect([
            ['brand' => 'Tesla',  'color' => 'red'],
            ['brand' => 'Pagani', 'color' => 'white'],
            ['brand' => 'Tesla',  'color' => 'black'],
            ['brand' => 'Pagani', 'color' => 'orange'],
        ]);
        $plucked = $collection->pluck('color', 'brand');
        $this->assertEquals($plucked->all(), ['Tesla' => 'black', 'Pagani' => 'orange']);
    }

    public function testFirst(): void
    {
        $collection = collect([1, 2, 3, 4]);
        $this->assertEquals($collection->first(), 1);

        $this->assertEquals($collection->first(function (int $value, int $key) {
            return $value > 2 && $key > 2;
        }), 4);
    }

    public function testFirstOrFaild(): void
    {
        $collection = collect([1, 2, 3, 4]);
        $this->assertEquals($collection->firstOrFail(), 1);

        $this->assertEquals($collection->firstOrFail(function (int $value, int $key) {
            return $value > 2 && $key > 2;
        }), 4);

        $this->expectException(ItemNotFoundException::class);
        collect([])->firstOrFail();
        
        $collection->firstOrFail(function (int $value, int $key) {
            return $value > 5;
        });
    }

    public function testFirstWhere(): void
    {
        $collection = collect([
            ['name' => 'Regena', 'age' => null],
            ['name' => 'Linda', 'age' => 14],
            ['name' => 'Diego', 'age' => 23],
            ['name' => 'Linda', 'age' => 84],
        ]);
        $this->assertEquals($collection->firstWhere('name', 'Linda'), ['name' => 'Linda', 'age' => 14]);
        $this->assertEquals($collection->firstWhere('age', 18, '>='), ['name' => 'Diego', 'age' => 23]);
        $this->assertEquals($collection->firstWhere('age'), ['name' => 'Linda', 'age' => 14]);
        $this->assertEquals(collect()->firstWhere('age'), null);
    }

    public function testLast(): void
    {
        $collection = collect([1, 2, 3, 4]);

        $this->assertEquals($collection->last(), 4);

        $this->assertEquals($collection->last(function (int $value, int $key) {
            return $value < 3;
        }), 2);
    }

    public function testLazy(): void
    {
        $collection = collect([1, 2, 3, 4]);
        $this->assertInstanceOf(LazyCollection::class, $collection->lazy());
    }

    public function testReverse(): void
    {
        $array = ['a', 'b', 'c', 'd', 'e'];
        $collection = collect($array);
        $this->assertEquals($collection->reverse()->all(), array_reverse($array, true));

        $this->assertEquals($collection->reverse(false)->all(), array_reverse($array, false));
    }

    public function testRandom(): void
    {
        $array = [1, 2, 3, 4, 5];
        $collection = collect($array);
        $this->assertContains($collection->random(), $array);

        $rand = $collection->random(3, true);
        $keys = array_keys($array);
        foreach ($rand as $key => $item) {
            $this->assertContains($key, $keys);
            $this->assertContains($item, $array);
        }

        $rand = $collection->random(fn (Collection $items) => min(10, count($items)));
        foreach ($rand as $item) {
            $this->assertContains($item, $array);
        }
    }

    public function testDiff(): void
    {
        $collection = collect([1, 2, 3, 4, 5]);
        $diff = $collection->diff([2, 4, 6, 8]);
        $this->assertEquals($diff->all(), [0 => 1, 2 => 3, 4 => 5]);
    }

    public function testDiffAssoc(): void
    {
        $collection = collect([
            'color' => 'orange',
            'type' => 'fruit',
            'remain' => 6,
        ]);
        $diff = $collection->diffAssoc([
            'color' => 'yellow',
            'type' => 'fruit',
            'remain' => 3,
            'used' => 6,
        ]);
        $this->assertEquals($diff->all(), ['color' => 'orange', 'remain' => 6]);
    }

    public function testDiffKeys(): void
    {
        $collection = collect([
            'one' => 10,
            'two' => 20,
            'three' => 30,
            'four' => 40,
            'five' => 50,
        ]);
        $diff = $collection->diffKeys([
            'two' => 2,
            'four' => 4,
            'six' => 6,
            'eight' => 8,
        ]);
        $this->assertEquals($diff->all(), ['one' => 10, 'three' => 30, 'five' => 50]);
    }

    public function testDuplicates(): void
    {
        $collection = collect(['a', 'b', 'a', 'c', 'b']);
        $this->assertEquals($collection->duplicates()->all(), [2 => 'a', 4 => 'b']);

        $employees = collect([
            ['email' => 'abigail@example.com', 'position' => 'Developer'],
            ['email' => 'james@example.com', 'position' => 'Designer'],
            ['email' => 'victoria@example.com', 'position' => 'Developer'],
        ]);
        $this->assertEquals($employees->duplicates('position')->all(), [2 => 'Developer']);
    }

    public function testDuplicatesStrict(): void
    {
        $collection = collect([1, 2, '1', 2]);
        $this->assertEquals($collection->duplicatesStrict()->all(), [3 => 2]);
    }

    public function testSearch(): void
    {
        $collection = collect([2, 4, 6, 8]);
        $this->assertEquals($collection->search(4), 1);
        
        $this->assertFalse($collection->search('4', true));

        $this->assertFalse($collection->search(function ($item) {
            return $item === 1;
        }));
        
        $this->assertEquals($collection->search(function (int $item) {
            return $item > 5;
        }), 2);
    }

    public function testShift(): void
    {
        $collection = collect([1, 2, 3, 4, 5]);
        $this->assertEquals($collection->shift(), 1);
        $this->assertEquals($collection->all(), [2, 3, 4, 5]);
        
        $collection = collect([1, 2, 3, 4, 5]);
        
        $this->assertEquals($collection->shift(3)->all(), [1, 2, 3]);
        $this->assertEquals($collection->all(), [4, 5]);

        $this->assertEquals(collect()->shift()->all(), []);
    }

    public function testShuffle(): void
    {
        $array = [1, 2, 3, 4, 5];
        $collection = collect($array);
        $shuffled = $collection->shuffle();
        foreach ($shuffled as $item) {
            $this->assertContains($item, $array);
        }
    }

    public function testSliding(): void
    {
        $collection = collect([1, 2, 3, 4, 5]);
        $chunks = $collection->sliding(2);
        $this->assertEquals($chunks->toArray(), [[1, 2], [2, 3], [3, 4], [4, 5]]);

        $collection = collect([1, 2, 3, 4, 5]);
        $chunks = $collection->sliding(3, step: 2);
        $this->assertEquals($chunks->toArray(), [[1, 2, 3], [3, 4, 5]]);
    }

    public function testSkip(): void
    {
        $collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        $this->assertEquals($collection->skip(4)->all(), [5, 6, 7, 8, 9, 10]);
    }

    public function testSlice(): void
    {
        $collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
 
        $this->assertEquals($collection->slice(4)->all(), [5, 6, 7, 8, 9, 10]);

        $this->assertEquals($collection->slice(4, 2)->all(), [5, 6]);

        $this->assertEquals($collection->slice(4, -2, true)->all(), [4 => 5, 5 => 6, 6 => 7, 7 => 8]);
    }

    public function testSplit(): void
    {
        $collection = collect([1, 2, 3, 4, 5]);
        $groups = $collection->split(3);
        $this->assertEquals($groups->toArray(), [[1, 2], [3, 4], [5]]);
        $this->assertEquals(collect()->split(2)->all(), []);
    }

    public function testIsEmpty(): void
    {
        $this->assertTrue(collect()->isEmpty());
        $this->assertTrue(collect([])->isEmpty());
    }

    public function testIsNotEmpty(): void
    {
        $this->assertTrue(collect(['thuan'])->isNotEmpty());
    }

    public function testImplode(): void
    {
        $collection = collect([
            ['account_id' => 1, 'product' => 'Desk'],
            ['account_id' => 2, 'product' => 'Chair'],
        ]);
         
        $this->assertEquals($collection->implode(', ', 'product'), 'Desk, Chair');
        $this->assertEquals($collection->implode(', ', function (array $item, int $key) {
            return strtoupper($item['product']);
        }), 'DESK, CHAIR');

        $array = [1, 2, 3, 4, 5];
        $this->assertEquals(collect($array)->implode('-'), implode('-', $array));
    }

    public function testIntersect(): void
    {
        $collection = collect(['Desk', 'Sofa', 'Chair']);
        $intersect = $collection->intersect(['Desk', 'Chair', 'Bookcase']);
        $this->assertEquals($intersect->all(), [0 => 'Desk', 2 => 'Chair']);
    }

    public function testintersectAssoc(): void
    {
        $collection = collect([
            'color' => 'red',
            'size' => 'M',
            'material' => 'cotton'
        ]);
         
        $intersect = $collection->intersectAssoc([
            'color' => 'blue',
            'size' => 'M',
            'material' => 'polyester'
        ]);

        $this->assertEquals($intersect->all(), ['size' => 'M']);
    }

    public function testIntersectByKeys(): void
    {
        $collection = collect([
            'serial' => 'UX301', 'type' => 'screen', 'year' => 2009,
        ]);
         
        $intersect = $collection->intersectByKeys([
            'reference' => 'UX404', 'type' => 'tab', 'year' => 2011,
        ]);
         
        $this->assertEquals($intersect->all(), ['type' => 'screen', 'year' => 2009]);
    }

    public function testFlatten(): void
    {
        $collection = collect([
            'name' => 'thuan',
            'languages' => [
                'php', 'golang', 'javascript'
            ]
        ]);
        $flattened = $collection->flatten();
        $this->assertEquals($flattened->all(), ['thuan', 'php', 'golang', 'javascript']);

        $collection = collect([
            'Apple' => [
                [
                    'name' => 'iPhone 6S',
                    'brand' => 'Apple'
                ],
            ],
            'Samsung' => [
                [
                    'name' => 'Galaxy S7',
                    'brand' => 'Samsung'
                ],
            ],
        ]);
        $products = $collection->flatten(1);
        $this->assertEquals($products->all(), [
            ['name' => 'iPhone 6S', 'brand' => 'Apple'],
            ['name' => 'Galaxy S7', 'brand' => 'Samsung'],
        ]);
    }

    public function testChunk(): void
    {
        $chunks = collect([1, 2, 3, 4, 5, 6, 7]);
        $this->assertEquals($chunks->chunk(4)->toArray(), [[1, 2, 3, 4], [4 => 5, 5 => 6, 6 => 7]]);
        $this->assertEquals($chunks->chunk(-1)->toArray(), []);
    }

    public function testChunkWhile(): void
    {
        $chunks = collect(str_split('AABBCCCD'))->chunkWhile(function (string $value, int $key, Collection $chunk) {
            return $value === $chunk->last();
        });
        $this->assertEquals($chunks->toArray(), [['A', 'A'], [2 => 'B', 3 => 'B'], [4 => 'C', 5 => 'C', 6 => 'C'], [7 => 'D']]);
    }

    public function testCollapse(): void
    {
        $collection = collect([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ]);
        $collapsed = $collection->collapse();
        $this->assertEquals($collapsed->all(), range(1, 9));
    }

    public function testCombine(): void
    {
        $collection = collect(['name', 'age']);
        $combined = $collection->combine(['George', 29]);
        $this->assertEquals($combined->all(), ['name' => 'George', 'age' => 29]);
    }

    public function testConcat(): void
    {
        $collection = collect(['John Doe']);
        $concatenated = $collection->concat(['Jane Doe'])->concat(['name' => 'Johnny Doe']);
        $this->assertEquals($concatenated->all(), ['John Doe', 'Jane Doe', 'Johnny Doe']);
    }

    public function testContains(): void
    {
        $collection = collect([1, 2, 3, 4, 5]);
        $this->assertFalse($collection->contains(function (int $value) {
            return $value > 5;
        }));
        $this->assertTrue($collection->contains(function (int $value) {
            return $value > 4;
        }));

        $collection = collect(['name' => 'Desk', 'price' => 100]);
        $this->assertTrue($collection->contains('Desk'));
        $this->assertFalse($collection->contains('New York'));

        $collection = collect([
            ['product' => 'Desk', 'price' => 200],
            ['product' => 'Chair', 'price' => 100],
        ]);
        $this->assertTrue($collection->contains('product', 'Desk'));
        $this->assertFalse($collection->contains('product', 'Bookcase'));
    }

    public function testContainsStrict(): void
    {
        $collection = collect([
            ['product' => 'Desk', 'price' => 200],
            ['product' => 'Chair', 'price' => 100],
        ]);
        $this->assertFalse($collection->containsStrict('price', '200'));
        $this->assertTrue($collection->containsStrict('price', 200));
    }

    public function testSole(): void
    {
        $this->assertEquals(collect([1, 2, 3, 4])->sole(function (int $value) {
            return $value === 2;
        }), 2);

        $this->assertEquals(collect([
            ['product' => 'Desk', 'price' => 200],
            ['product' => 'Chair', 'price' => 100],
        ])->sole('product', 'Chair'), ['product' => 'Chair', 'price' => 100]);

        $this->assertEquals(collect([
            ['product' => 'Desk', 'price' => 200],
        ])->sole(), ['product' => 'Desk', 'price' => 200]);

        try {
            collect([1, 2, 3, 4])->sole(function (int $value) {
                return $value > 4;
            });
        } catch (\Throwable $th) {
            $this->assertInstanceOf(ItemNotFoundException::class, $th);
        }

        try {
            $collect = collect([1, 2, 3, 4]);
            $collect->sole(function (int $value) {
                return $value > 1;
            });
        } catch (\Throwable $th) {
            $this->assertInstanceOf(MultipleItemsFoundException::class, $th);
            if ($th instanceof MultipleItemsFoundException) {
                $this->assertEquals($th->getCount(), $collect->count() - 1);
            }
        }
    }

    public function testSplitIn(): void
    {
        $collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        $this->assertEquals(
            $collection->splitIn(3)->toArray(),
            [[1, 2, 3, 4], [4 => 5, 5 => 6, 6 => 7, 7 => 8], [8 => 9, 9 => 10]]
        );
    }

    public function testReplace(): void
    {
        $collection = collect(['name' => 'Test', 'position' => 'fresher']);
        $replaced = $collection->replace(['name' => 'Thuận', 'position' => 'junior']);
        $this->assertEquals($replaced->all(), ['name' => 'Thuận', 'position' => 'junior']);
    }

    public function testReplaceRecursive(): void
    {
        $collection = collect(['a' => ['red'], 'b' => ['green', 'blue']]);
        $replaced = $collection->replaceRecursive(['a' => ['yellow'], 'b' => [1 => 'black']]);
        $this->assertEquals($replaced->all(), ['a' => ['yellow'], 'b' => ['green', 'black']]);
    }

    public function testFilter(): void
    {
        $collection = collect([1, 2, 3, 4]);
        $filtered = $collection->filter(function (int $value, int $key) {
            return $value > 2;
        });
        $this->assertEquals($filtered->all(), [2 => 3, 3 => 4]);
    
        $collection = collect([1, 2, 3, null, false, '', 0, []]);
        $this->assertEquals($collection->filter()->all(), [1, 2, 3]);
    }

    public function testReject(): void
    {
        $collection = collect([1, 2, 3, 4]);
        $rejected = $collection->reject(function (int $value, int $key) {
            return $value > 2;
        });
        $this->assertEquals($rejected->all(), [1, 2]);
    }

    public function testSort(): void
    {
        $collection = collect([5, 3, 1, 2, 4]);
        $this->assertEquals($collection->sort()->all(), range(1, 5));
        $this->assertEquals($collection->sort(true)->all(), range(5, 1, -1));
    }

    public function testSortDesc(): void
    {
        $collection = collect([5, 3, 1, 2, 4]);
        $this->assertEquals($collection->sortDesc()->all(), range(5, 1, -1));
    }

    public function testSortBy(): void
    {
        $collection = collect([
            ['name' => 'Desk', 'price' => 200],
            ['name' => 'Chair', 'price' => 100],
            ['name' => 'Bookcase', 'price' => 150],
        ]);
        $sorted = $collection->sortBy('price');
        $this->assertEquals($sorted->all(), [
            1 => ['name' => 'Chair', 'price' => 100],
            2 => ['name' => 'Bookcase', 'price' => 150],
            0 => ['name' => 'Desk', 'price' => 200]
        ]);

        $collection = collect([
            ['title' => 'Item 1'],
            ['title' => 'Item 12'],
            ['title' => 'Item 3'],
        ]);
        $sorted = $collection->sortBy('title', options: SORT_NATURAL);
        $this->assertEquals($sorted->all(), [
            0 => ['title' => 'Item 1'],
            2 => ['title' => 'Item 3'],
            1 => ['title' => 'Item 12']    
        ]);

        $collection = collect([
            ['name' => 'Desk', 'colors' => ['Black', 'Mahogany']],
            ['name' => 'Chair', 'colors' => ['Black']],
            ['name' => 'Bookcase', 'colors' => ['Red', 'Beige', 'Brown']],
        ]);
        $sorted = $collection->sortBy(function (array $product, int $key) {
            return count($product['colors']);
        });
        $this->assertEquals($sorted->all(), [
            1 => ['name' => 'Chair', 'colors' => ['Black']],
            0 => ['name' => 'Desk', 'colors' => ['Black', 'Mahogany']],
            2 => ['name' => 'Bookcase', 'colors' => ['Red', 'Beige', 'Brown']],  
        ]);
    }

    public function testSortByDesc(): void
    {
        $collection = collect([
            ['name' => 'Bookcase', 'price' => 150],
            ['name' => 'Desk', 'price' => 200],
            ['name' => 'Chair', 'price' => 100],
        ]);
        $sorted = $collection->sortByDesc('price');
        $this->assertEquals($sorted->all(), [
            1 => ['name' => 'Desk', 'price' => 200],
            0 => ['name' => 'Bookcase', 'price' => 150],
            2 => ['name' => 'Chair', 'price' => 100],
        ]);

        $collection = collect([
            ['title' => 'Item 1'],
            ['title' => 'Item 12'],
            ['title' => 'Item 3'],
        ]);
        $sorted = $collection->sortByDesc('title', options: SORT_NATURAL);
        $this->assertEquals($sorted->all(), [
            1 => ['title' => 'Item 12'],
            2 => ['title' => 'Item 3'],
            0 => ['title' => 'Item 1'],
        ]);

        $collection = collect([
            ['name' => 'Desk', 'colors' => ['Black', 'Mahogany']],
            ['name' => 'Chair', 'colors' => ['Black']],
            ['name' => 'Bookcase', 'colors' => ['Red', 'Beige', 'Brown']],
        ]);
        $sorted = $collection->sortByDesc(function (array $product, int $key) {
            return count($product['colors']);
        });
        $this->assertEquals($sorted->all(), [
            2 => ['name' => 'Bookcase', 'colors' => ['Red', 'Beige', 'Brown']],
            0 => ['name' => 'Desk', 'colors' => ['Black', 'Mahogany']],
            1 => ['name' => 'Chair', 'colors' => ['Black']],
        ]);
    }

    public function testThenBy(): void
    {
        $collection = collect([
            ['name' => 'Desk', 'price' => 200],
            ['name' => 'Chair', 'price' => 100],
            ['name' => 'Bookcase', 'price' => 100],
        ]);
        $sorted = $collection->sortBy('price')->thenBy('name');
        $this->assertEquals($sorted->all(), [
            2 => ['name' => 'Bookcase', 'price' => 100],
            1 => ['name' => 'Chair', 'price' => 100],
            0 => ['name' => 'Desk', 'price' => 200],
        ]);

        $collection = collect([
            ['title' => 'Item 1', 'description' => 'Desc 1'],
            ['title' => 'Item 12', 'description' => 'Desc 34'],
            ['title' => 'Item 12', 'description' => 'Desc 23'],
        ]);
        $sorted = $collection->sortBy('title', options: SORT_NATURAL)->thenBy('description', options: SORT_NATURAL);
        $this->assertEquals($sorted->all(), [
            0 => ['title' => 'Item 1', 'description' => 'Desc 1'],
            2 => ['title' => 'Item 12', 'description' => 'Desc 23'],
            1 => ['title' => 'Item 12', 'description' => 'Desc 34'],
        ]);

        $collection = collect([
            ['name' => 'Bookcase', 'colors' => ['Red', 'Beige', 'Brown']],
            ['name' => 'Chair', 'colors' => ['Black', 'Mahogany']],
            ['name' => 'Chair', 'colors' => ['Black']],
        ]);
        $sorted = $collection->sortBy('name')->thenBy(function (array $product, int $key) {
            return count($product['colors']);
        });
        $this->assertEquals($sorted->all(), [
            0 => ['name' => 'Bookcase', 'colors' => ['Red', 'Beige', 'Brown']],
            2 => ['name' => 'Chair', 'colors' => ['Black']],
            1 => ['name' => 'Chair', 'colors' => ['Black', 'Mahogany']],
        ]);

        $this->expectException(BadMethodCallException::class);
        collect([
            ['name' => 'Desk', 'price' => 200],
            ['name' => 'Chair', 'price' => 100],
            ['name' => 'Bookcase', 'price' => 100],
        ])->thenBy('name');
    }

    public function testThenByDesc(): void
    {
        $collection = collect([
            ['name' => 'Desk', 'price' => 200],
            ['name' => 'Chair', 'price' => 100],
            ['name' => 'Bookcase', 'price' => 100],
        ]);
        $sorted = $collection->sortBy('price')->thenByDesc('name');
        $this->assertEquals($sorted->all(), [
            1 => ['name' => 'Chair', 'price' => 100],
            2 => ['name' => 'Bookcase', 'price' => 100],
            0 => ['name' => 'Desk', 'price' => 200],
        ]);

        $collection = collect([
            ['title' => 'Item 1', 'description' => 'Desc 1'],
            ['title' => 'Item 12', 'description' => 'Desc 23'],
            ['title' => 'Item 12', 'description' => 'Desc 34'],
        ]);
        $sorted = $collection->sortBy('title', options: SORT_NATURAL)->thenByDesc('description', options: SORT_NATURAL);
        $this->assertEquals($sorted->all(), [
            0 => ['title' => 'Item 1', 'description' => 'Desc 1'],
            2 => ['title' => 'Item 12', 'description' => 'Desc 34'],
            1 => ['title' => 'Item 12', 'description' => 'Desc 23'],
        ]);

        $collection = collect([
            ['name' => 'Bookcase', 'colors' => ['Red', 'Beige', 'Brown']],
            ['name' => 'Chair', 'colors' => ['Black']],
            ['name' => 'Chair', 'colors' => ['Black', 'Mahogany']],
        ]);
        $sorted = $collection->sortBy('name')->thenByDesc(function (array $product, int $key) {
            return count($product['colors']);
        });
        $this->assertEquals($sorted->all(), [
            0 => ['name' => 'Bookcase', 'colors' => ['Red', 'Beige', 'Brown']],
            2 => ['name' => 'Chair', 'colors' => ['Black', 'Mahogany']],
            1 => ['name' => 'Chair', 'colors' => ['Black']],
        ]);

        $this->expectException(BadMethodCallException::class);
        collect([
            ['name' => 'Desk', 'price' => 200],
            ['name' => 'Chair', 'price' => 100],
            ['name' => 'Bookcase', 'price' => 100],
        ])->thenByDesc('name');
    }

    public function testSortKeys(): void
    {
        $collection = collect([
            'id' => 1234,
            'first' => 'Nguyễn',
            'last' => 'Thuận',
        ]);
         
        $sorted = $collection->sortKeys();
        $this->assertEquals($sorted->all(), [
            'first' => 'Nguyễn',
            'id' => 1234,
            'last' => 'Thuận'
        ]);
    }

    public function testSortKeysDesc(): void
    {
        $collection = collect([
            'id' => 1234,
            'first' => 'Nguyễn',
            'last' => 'Thuận',
        ]);
         
        $sorted = $collection->sortKeysDesc();
        $this->assertEquals($sorted->all(), [
            'last' => 'Thuận',
            'id' => 1234,
            'first' => 'Nguyễn',
        ]);
    }

    public function testGroupBy(): void
    {
        $collection = collect([
            ['account_id' => 'account-x10', 'product' => 'Chair'],
            ['account_id' => 'account-x10', 'product' => 'Bookcase'],
            ['account_id' => 'account-x11', 'product' => 'Desk'],
        ]);

        $grouped = $collection->groupBy('account_id');
        $this->assertEquals($grouped->toArray(), [
            'account-x10' => [
                ['account_id' => 'account-x10', 'product' => 'Chair'],
                ['account_id' => 'account-x10', 'product' => 'Bookcase'],
            ],
            'account-x11' => [
                ['account_id' => 'account-x11', 'product' => 'Desk'],
            ],
        ]);

        $grouped = $collection->groupBy(function (array $item, int $key) {
            return substr($item['account_id'], -3);
        });
        $this->assertEquals($grouped->toArray(), [
            'x10' => [
                ['account_id' => 'account-x10', 'product' => 'Chair'],
                ['account_id' => 'account-x10', 'product' => 'Bookcase'],
            ],
            'x11' => [
                ['account_id' => 'account-x11', 'product' => 'Desk'],
            ],
        ]);

        $collection = collect([
            10 => ['user' => 1, 'skill' => 1, 'roles' => ['Role_1', 'Role_3']],
            20 => ['user' => 2, 'skill' => 1, 'roles' => ['Role_1', 'Role_2']],
            30 => ['user' => 3, 'skill' => 2, 'roles' => ['Role_1']],
            40 => ['user' => 4, 'skill' => 2, 'roles' => ['Role_2']],
        ]);
         
        $grouped = $collection->groupBy(['skill', function (array $item) {
            return $item['roles'];
        }], true);
        $this->assertEquals($grouped->toArray(), [
            1 => [
                'Role_1' => [
                    10 => ['user' => 1, 'skill' => 1, 'roles' => ['Role_1', 'Role_3']],
                    20 => ['user' => 2, 'skill' => 1, 'roles' => ['Role_1', 'Role_2']],
                ],
                'Role_3' => [
                    10 => ['user' => 1, 'skill' => 1, 'roles' => ['Role_1', 'Role_3']],
                ],
                'Role_2' => [
                    20 => ['user' => 2, 'skill' => 1, 'roles' => ['Role_1', 'Role_2']],
                ],
            ],
            2 => [
                'Role_1' => [
                    30 => ['user' => 3, 'skill' => 2, 'roles' => ['Role_1']],
                ],
                'Role_2' => [
                    40 => ['user' => 4, 'skill' => 2, 'roles' => ['Role_2']],
                ],
            ],
        ]);
    }

    public function testOnly(): void
    {
        $collection = collect([
            'product_id' => 1,
            'name' => 'Desk',
            'price' => 100,
            'discount' => false
        ]);
        $filtered = $collection->only('product_id', 'name');
        $this->assertEquals($filtered->all(), ['product_id' => 1, 'name' => 'Desk']);
    }

    public function testJoin(): void
    {
        $this->assertEquals(collect(['a', 'b', 'c'])->join(', '), 'a, b, c');
        $this->assertEquals(collect(['a', 'b', 'c'])->join(', ', ', and '), 'a, b, and c');
        $this->assertEquals(collect(['a', 'b'])->join(', ', ' and '), 'a and b');
        $this->assertEquals(collect(['a'])->join(', ', ' and '), 'a');
        $this->assertEquals(collect([])->join(', ', ' and '), '');
    }

    public function testCount(): void
    {
        $collection = collect([1, 2, 3, 4]);
        $this->assertEquals($collection->count(), 4);
        $this->assertEquals($collection->count(fn ($item) => $item > 1), 3);
    }

    public function testSum(): void
    {
        $this->assertEquals(collect([1, 2, 3, 4, 5])->sum(), 15);

        $collection = collect([
            ['name' => 'JavaScript: The Good Parts', 'pages' => 176],
            ['name' => 'JavaScript: The Definitive Guide', 'pages' => 1096],
        ]);
        $this->assertEquals($collection->sum('pages'), 1272);

        $collection = collect([
            ['name' => 'Chair', 'colors' => ['Black']],
            ['name' => 'Desk', 'colors' => ['Black', 'Mahogany']],
            ['name' => 'Bookcase', 'colors' => ['Red', 'Beige', 'Brown']],
        ]);
        $this->assertEquals($collection->sum(function (array $product) {
            return count($product['colors']);
        }), 6);
    }

    public function testOffsetExists(): void
    {
        $collection = collect([
            'product_id' => 1,
            'name' => 'Desk',
            'price' => 100,
            'discount' => false
        ]);
        $this->assertTrue(isset($collection['name']));
        $this->assertFalse(isset($collection['detail']));
    }

    public function testOffsetUnset(): void
    {
        $collection = collect([
            'product_id' => 1,
            'name' => 'Desk',
            'price' => 100,
            'discount' => false
        ]);
        unset($collection['name']);
        $this->assertEquals($collection->all(), [
            'product_id' => 1,
            'price' => 100,
            'discount' => false
        ]);
    }

    public function testOffsetGet(): void
    {
        $collection = collect([
            'product_id' => 1,
            'name' => 'Desk',
            'price' => 100,
            'discount' => false
        ]);
        $this->assertEquals($collection['name'], 'Desk');
    }
}