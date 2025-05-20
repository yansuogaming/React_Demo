<?php

declare(strict_types = 1);

namespace Vietiso\Tests\Collection;

use PHPUnit\Framework\TestCase;
use InvalidArgumentException;
use Vietiso\Core\Collection\Collection;
use Vietiso\Core\Collection\ItemNotFoundException;
use Vietiso\Core\Collection\LazyCollection;

final class LazyCollectionTest extends TestCase
{
    public function testMake(): void
    {
        $range = range(1, 3);
        $lazyCollection = LazyCollection::make($range);
        $this->assertEquals($lazyCollection->all(), $lazyCollection->all());

        $resource = function () use ($range) {
            foreach ($range as $value) {
                yield $value;
            }
        };
        $this->assertEquals(LazyCollection::make($resource)->all(), $range);
        $this->assertEquals(LazyCollection::make()->all(), []);

        $this->expectException(InvalidArgumentException::class);
        LazyCollection::make($resource());
    }

    public function testRange(): void
    {
        $this->assertEquals(LazyCollection::range(1, 3)->all(), range(1, 3));
        $this->assertEquals(LazyCollection::range(3, 1, 2)->all(), range(3, 1, 2));
    }

    public function testGet(): void
    {
        $array = ['product_id' => 'prod-100', 'name' => 'Desk'];
        $resource = function () use ($array) {
            foreach ($array as $key => $value) {
                yield $key => $value;
            }
        };
        $this->assertEquals(LazyCollection::make($resource)->get('name'), 'Desk');
        $this->assertEquals(LazyCollection::make($resource)->get('fullname', 'Chair'), 'Chair');
    }

    public function testHas(): void
    {
        $array = ['product_id' => 'prod-100', 'name' => 'Desk'];
        $resource = function () use ($array) {
            foreach ($array as $key => $value) {
                yield $key => $value;
            }
        };
        $this->assertTrue(LazyCollection::make($resource)->has('name'));
        $this->assertFalse(LazyCollection::make($resource)->has('name', 'fullname'));
    }

    public function testHasAny(): void
    {
        $array = ['product_id' => 'prod-100', 'name' => 'Desk'];
        $resource = function () use ($array) {
            foreach ($array as $key => $value) {
                yield $key => $value;
            }
        };
        $this->assertTrue(LazyCollection::make($resource)->hasAny('name', 'fullname'));
        $this->assertFalse(LazyCollection::make($resource)->hasAny('fullname', 'address'));
    }

    public function testExcept(): void
    {
        $array = ['product_id' => 'prod-100', 'name' => 'Desk'];
        $resource = function () use ($array) {
            foreach ($array as $key => $value) {
                yield $key => $value;
            }
        };
        $this->assertEquals(LazyCollection::make($resource)->except('product_id')->all(), ['name' => 'Desk']);
    }

    public function testKeys(): void
    {
        $array = ['product_id' => 'prod-100', 'name' => 'Desk'];
        $resource = function () use ($array) {
            foreach ($array as $key => $value) {
                yield $key => $value;
            }
        };
        $this->assertEquals(LazyCollection::make($resource)->keys()->all(), array_keys($array));
    }

    public function testKeyBy(): void
    {
        $array = [
            ['product_id' => 'prod-100', 'name' => 'Desk'],
            ['product_id' => 'prod-200', 'name' => 'Chair'],
        ];
        $resource = function () use ($array) {
            foreach ($array as $key => $value) {
                yield $key => $value;
            }
        };
        $lazyCollection = LazyCollection::make($resource);
        $this->assertEquals($lazyCollection->keyBy('product_id')->all(), [
            'prod-100' => ['product_id' => 'prod-100', 'name' => 'Desk'],
            'prod-200' => ['product_id' => 'prod-200', 'name' => 'Chair'],
        ]);

        $this->assertEquals($lazyCollection->keyBy(function (array $item, int $key) {
            return strtoupper($item['product_id']);
        })->all(), [
            'PROD-100' => ['product_id' => 'prod-100', 'name' => 'Desk'],
            'PROD-200' => ['product_id' => 'prod-200', 'name' => 'Chair'],
        ]);
    }

    public function testValues(): void
    {
        $array = [
            10 => ['product' => 'Desk', 'price' => 200],
            11 => ['product' => 'Desk', 'price' => 200],
        ];
        $lazyCollection = LazyCollection::make(function () use ($array) {
            foreach ($array as $key => $value) {
                yield $key => $value;
            }
        });
        $this->assertEquals($lazyCollection->values()->all(), array_values($array));
    }

    public function testCountBy(): void
    {
        $lazyCollection = LazyCollection::make(function () {
            foreach ([1, 2, 2, 2, 3] as $key => $value) {
                yield $key => $value;
            }
        });
        
        $this->assertEquals($lazyCollection->countBy()->all(), [1 => 1, 2 => 3, 3 => 1]);

        $lazyCollection = LazyCollection::make(function () {
            foreach (['alice@gmail.com', 'bob@yahoo.com', 'carlos@gmail.com'] as $key => $value) {
                yield $key => $value;
            }
        });

        $this->assertEquals($lazyCollection->countBy(function (string $email) {
            return substr(strrchr($email, "@"), 1);
        })->all(), ['gmail.com' => 2, 'yahoo.com' => 1]);
    }

    public function testAvg(): void
    {
        $this->assertEquals(LazyCollection::make(function () {
            foreach ([
                ['foo' => 10],
                ['foo' => 10],
                ['foo' => 20],
                ['foo' => 40]
            ] as $key => $value) {
                yield $key => $value;
            }
        })->avg('foo'), 20);

        $this->assertEquals(LazyCollection::make(function () {
            foreach ([1, 1, 2, 4] as $key => $value) {
                yield $key => $value;
            }
        })->avg(), 2);
    }

    public function testMax(): void
    {
        $this->assertEquals(LazyCollection::make(function () {
            foreach ([
                ['foo' => 10],
                ['foo' => 20]
            ] as $key => $value) {
                yield $key => $value;
            }
        })->max('foo'), 20);

        $this->assertEquals(LazyCollection::make(function () {
            foreach ([1, 2, 3, 4, 5] as $key => $value) {
                yield $key => $value;
            }
        })->max(), 5);
    }

    public function testMin(): void
    {
        $this->assertEquals(LazyCollection::make(function () {
            foreach ([
                ['foo' => 10],
                ['foo' => 20]
            ] as $key => $value) {
                yield $key => $value;
            }
        })->min('foo'), 10);

        $this->assertEquals(LazyCollection::make(function () {
            foreach ([1, 2, 3, 4, 5] as $key => $value) {
                yield $key => $value;
            }
        })->min(), 1);
    }

    public function testMedian(): void
    {
        $this->assertEquals(LazyCollection::make(function () {
            foreach ([
                ['foo' => 10],
                ['foo' => 10],
                ['foo' => 20],
                ['foo' => 40]
            ] as $key => $value) {
                yield $key => $value;
            }
        })->median('foo'), 15);

        $this->assertEquals(LazyCollection::make(function () {
            foreach ([1, 1, 2, 4] as $key => $value) {
                yield $key => $value;
            }
        })->median(), 1.5);
    }

    public function testMode(): void
    {
        $this->assertEquals(LazyCollection::make(function () {
            foreach ([
                ['foo' => 10],
                ['foo' => 10],
                ['foo' => 20],
                ['foo' => 40]
            ] as $key => $value) {
                yield $key => $value;
            }
        })->mode('foo'), [10]);

        $this->assertEquals(LazyCollection::make(function () {
            foreach ([1, 1, 2, 4] as $key => $value) {
                yield $key => $value;
            }
        })->mode(), [1]);

        $this->assertEquals(LazyCollection::make(function () {
            foreach ([1, 1, 2, 2] as $key => $value) {
                yield $key => $value;
            }
        })->mode(), [1, 2]);
    }

    public function testMerge(): void
    {
        $this->assertEquals(
            LazyCollection::make(function () {
                foreach (['product_id' => 1, 'price' => 100] as $key => $value) {
                    yield $key => $value;
                }
            })->merge(['price' => 200, 'discount' => false])->all(),
            ['product_id' => 1, 'price' => 200, 'discount' => false]
        );
    }

    public function testMergeRecursive(): void
    {
        $this->assertEquals(
            LazyCollection::make(function () {
                foreach (['product_id' => 1, 'price' => 100] as $key => $value) {
                    yield $key => $value;
                }
            })->mergeRecursive([
                'product_id' => 2,
                'price' => 200,
                'discount' => false
            ])->all(),
            ['product_id' => [1, 2], 'price' => [100, 200], 'discount' => false]
        );
    }

    public function testMap(): void
    {
        $this->assertEquals(LazyCollection::range(1, 5)->map(function (int $item) {
            return $item * 2;
        })->all(), [2, 4, 6, 8, 10]);
    }

    public function testFlip(): void
    {
        $this->assertEquals(LazyCollection::make(function () {
            foreach (['name' => 'thuan', 'framework' => 'penguin'] as $key => $value) {
                yield $key => $value;
            }
        })->flip()->all(), ['thuan' => 'name', 'penguin' => 'framework']);
    }

    public function testFilter(): void
    {
        $this->assertEquals(LazyCollection::range(1, 4)->filter(function (int $value) {
            return $value > 2;
        })->all(), [2 => 3, 3 => 4]);

        $this->assertEquals(LazyCollection::make(function () {
            foreach ([1, 2, 3, null, false, '', 0, []] as $key => $value) {
                yield $key => $value;
            }
        })->filter()->all(), [1, 2, 3]);
    }

    public function testTake(): void
    {
        $this->assertEquals(LazyCollection::range(0, 5)->take(3)->all(), [0, 1, 2]);

        $this->assertEquals(LazyCollection::range(0, 5)->take(-2)->all(), [4, 5]);
    }

    public function testUnion(): void
    {
        $lazyCollection = LazyCollection::make(function () {
            foreach ([1 => ['a'], 2 => ['b']] as $key => $value) {
                yield $key => $value;
            }
        });
        $union = $lazyCollection->union([3 => ['c'], 1 => ['d']]);
        $this->assertEquals($union->all(), [1 => ['a'], 2 => ['b'], 3 => ['c']]);
    }

    public function testUnique(): void
    {
        $lazyCollection = LazyCollection::make(function () {
            foreach ([1, 1, 2, 2, 3, 4, 2] as $key => $value) {
                yield $key => $value;
            }
        });
        $unique = $lazyCollection->unique();
        $this->assertEquals($unique->values()->all(), [1, 2, 3, 4]);

        $lazyCollection = LazyCollection::make(function () {
            $list = [
                ['name' => 'iPhone 6', 'brand' => 'Apple', 'type' => 'phone'],
                ['name' => 'iPhone 5', 'brand' => 'Apple', 'type' => 'phone'],
                ['name' => 'Apple Watch', 'brand' => 'Apple', 'type' => 'watch'],
                ['name' => 'Galaxy S6', 'brand' => 'Samsung', 'type' => 'phone'],
                ['name' => 'Galaxy Gear', 'brand' => 'Samsung', 'type' => 'watch'],
            ];

            foreach ($list as $key => $value) {
                yield $key => $value;
            }
        });
        $unique = $lazyCollection->unique('brand');
        $this->assertEquals(
            $unique->values()->all(), [
                ['name' => 'iPhone 6', 'brand' => 'Apple', 'type' => 'phone'],
                ['name' => 'Galaxy S6', 'brand' => 'Samsung', 'type' => 'phone']
            ]
        );

        $unique = $lazyCollection->unique(function (array $item) {
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
        $lazyCollection = LazyCollection::make(function () {
            foreach ([1, 1, 2, 2, 3, 4, '2'] as $key => $value) {
                yield $key => $value;
            }
        });
        $unique = $lazyCollection->uniqueStrict();
        $this->assertEquals($unique->values()->all(), [1, 2, 3, 4, '2']);
    }

    public function testPad(): void
    {
        $lazyCollection = LazyCollection::make(function () {
            foreach (['A', 'B', 'C'] as $key => $value) {
                yield $key => $value;
            }
        });
        $filtered = $lazyCollection->pad(5, 0);
        $this->assertEquals($filtered->all(), ['A', 'B', 'C', 0, 0]);

        $filtered = $lazyCollection->pad(-5, 0);
        $this->assertEquals($filtered->all(), [0, 0, 'A', 'B', 'C']);
    }

    public function testPluck(): void
    {
        $lazyCollection = LazyCollection::make(function () {
            foreach ([
                ['product_id' => 'prod-100', 'name' => 'Desk'],
                ['product_id' => 'prod-200', 'name' => 'Chair'],
            ] as $key => $value) {
                yield $key => $value;
            }
        });
        $plucked = $lazyCollection->pluck('name');
        $this->assertEquals($plucked->all(), ['Desk', 'Chair']);

        $plucked = $lazyCollection->pluck('name', 'product_id');
        $this->assertEquals($plucked->all(), ['prod-100' => 'Desk', 'prod-200' => 'Chair']);

        $lazyCollection = LazyCollection::make(function () {
            foreach ([
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
            ] as $key => $value) {
                yield $key => $value;
            }
        });
        $plucked = $lazyCollection->pluck('releases.1x');
        $this->assertEquals($plucked->all(), [
            ['1.0', '1.1'],
            ['1.2', '1.3']
        ]);

        $lazyCollection = LazyCollection::make(function () {
            foreach ([
                ['brand' => 'Tesla',  'color' => 'red'],
                ['brand' => 'Pagani', 'color' => 'white'],
                ['brand' => 'Tesla',  'color' => 'black'],
                ['brand' => 'Pagani', 'color' => 'orange'],
            ] as $key => $value) {
                yield $key => $value;
            }
        });
        $plucked = $lazyCollection->pluck('color', 'brand');
        $this->assertEquals($plucked->all(), ['Tesla' => 'black', 'Pagani' => 'orange']);
    }

    public function testFirst(): void
    {
        $lazyCollection = LazyCollection::make(function () {
            foreach ([1, 2, 3, 4] as $key => $value) {
                yield $key => $value;
            }
        });
        $this->assertEquals($lazyCollection->first(), 1);

        $this->assertEquals($lazyCollection->first(function (int $value, int $key) {
            return $value > 2 && $key > 2;
        }), 4);

        $this->assertEquals($lazyCollection->first(function (int $value, int $key) {
            return $value > 5;
        }, 5), 5);
    }

    public function testFirstOrFail(): void
    {
        $lazyCollection = LazyCollection::make(function () {
            foreach ([1, 2, 3, 4] as $key => $value) {
                yield $key => $value;
            }
        });
        $this->assertEquals($lazyCollection->firstOrFail(), 1);

        $this->assertEquals($lazyCollection->firstOrFail(function (int $value, int $key) {
            return $value > 2 && $key > 2;
        }), 4);

        $this->expectException(ItemNotFoundException::class);
        LazyCollection::make([])->firstOrFail();
        
        $lazyCollection->firstOrFail(function (int $value, int $key) {
            return $value > 5;
        });
    }

    public function testFirstWhere(): void
    {
        $lazyCollection = LazyCollection::make(function () {
            foreach ([
                ['name' => 'Regena', 'age' => null],
                ['name' => 'Linda', 'age' => 14],
                ['name' => 'Diego', 'age' => 23],
                ['name' => 'Linda', 'age' => 84],
            ] as $key => $value) {
                yield $key => $value;
            }
        });
        $this->assertEquals($lazyCollection->firstWhere('name', 'Linda'), ['name' => 'Linda', 'age' => 14]);
        $this->assertEquals($lazyCollection->firstWhere('age', 18, '>='), ['name' => 'Diego', 'age' => 23]);
        $this->assertEquals($lazyCollection->firstWhere('age'), ['name' => 'Linda', 'age' => 14]);
        $this->assertEquals(LazyCollection::make()->firstWhere('age'), null);
    }

    public function testLast(): void
    {
        $lazyCollection = LazyCollection::make(function () {
            foreach ([1, 2, 3, 4] as $key => $value) {
                yield $key => $value;
            }
        });
        $this->assertEquals($lazyCollection->last(), 4);
        $this->assertEquals($lazyCollection->last(function (int $value, int $key) {
            return $value < 3;
        }), 2);
    }

    public function testReverse(): void
    {
        $lazyCollection = LazyCollection::make(function () {
            foreach (['a', 'b', 'c', 'd', 'e'] as $key => $value) {
                yield $key => $value;
            }
        });
        $reversed = $lazyCollection->reverse();
        $this->assertEquals($reversed->all(), ['e', 'd', 'c', 'b', 'a']);

        $reversed = $lazyCollection->reverse(true);
        $this->assertEquals($reversed->all(), [4 => 'e', 3 => 'd', 2 => 'c', 1 => 'b', 0 => 'a']);
    }

    public function testRandom(): void
    {
        $array = [1, 2, 3, 4, 5];
        $lazyCollection = LazyCollection::make(function () use ($array) {
            foreach ($array as $key => $value) {
                yield $key => $value;
            }
        });
        $this->assertContains($lazyCollection->random(), $array);

        $rand = $lazyCollection->random(3, true);
        $keys = array_keys($array);
        foreach ($rand as $key => $item) {
            $this->assertContains($key, $keys);
            $this->assertContains($item, $array);
        }

        $rand = $lazyCollection->random(fn (Collection $items) => min(10, $items->count()));
        foreach ($rand as $item) {
            $this->assertContains($item, $array);
        }
    }

    public function testDiff(): void
    {
        $array = [1, 2, 3, 4, 5];
        $lazyCollection = LazyCollection::make(function () use ($array) {
            foreach ($array as $key => $value) {
                yield $key => $value;
            }
        });
        $diff = $lazyCollection->diff([2, 4, 6, 8]);
        $this->assertEquals($diff->all(), [0 => 1, 2 => 3, 4 => 5]);
    }

    public function testDiffAssoc(): void
    {
        $lazyCollection = LazyCollection::make(function () {
            foreach ([
                'color' => 'orange',
                'type' => 'fruit',
                'remain' => 6,
            ] as $key => $value) {
                yield $key => $value;
            }
        });
        $diff = $lazyCollection->diffAssoc([
            'color' => 'yellow',
            'type' => 'fruit',
            'remain' => 3,
            'used' => 6,
        ]);
        $this->assertEquals($diff->all(), ['color' => 'orange', 'remain' => 6]);
    }

    public function testDiffKeys(): void
    {
        $lazyCollection = LazyCollection::make(function () {
            foreach ([
                'one' => 10,
                'two' => 20,
                'three' => 30,
                'four' => 40,
                'five' => 50,
            ] as $key => $value) {
                yield $key => $value;
            }
        });
        $diff = $lazyCollection->diffKeys([
            'two' => 2,
            'four' => 4,
            'six' => 6,
            'eight' => 8,
        ]);
        $this->assertEquals($diff->all(), ['one' => 10, 'three' => 30, 'five' => 50]);
    }

    public function testDuplicates(): void
    {
        $lazyCollection = LazyCollection::make(function () {
            foreach (['a', 'b', 'a', 'c', 'b'] as $key => $value) {
                yield $key => $value;
            }
        });
        $this->assertEquals($lazyCollection->duplicates()->all(), [2 => 'a', 4 => 'b']);

        $lazyCollection = LazyCollection::make(function () {
            foreach ([
                ['email' => 'abigail@example.com', 'position' => 'Developer'],
                ['email' => 'james@example.com', 'position' => 'Designer'],
                ['email' => 'victoria@example.com', 'position' => 'Developer'],
            ] as $key => $value) {
                yield $key => $value;
            }
        });
        $this->assertEquals($lazyCollection->duplicates('position')->all(), [2 => 'Developer']);
    }

    public function testSearch(): void
    {
        $lazyCollection = LazyCollection::make(function () {
            foreach ([2, 4, 6, 8] as $key => $value) {
                yield $key => $value;
            }
        });
        $this->assertEquals($lazyCollection->search(4), 1);
        
        $this->assertFalse($lazyCollection->search('4', true));

        $this->assertFalse($lazyCollection->search(function ($item) {
            return $item === 1;
        }));
        
        $this->assertEquals($lazyCollection->search(function (int $item) {
            return $item > 5;
        }), 2);
    }
}