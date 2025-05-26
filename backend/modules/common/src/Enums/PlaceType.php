<?php

namespace Vietiso\Modules\Common\Enums;

use Vietiso\Core\Support\EnumUtil;

enum PlaceType: string
{
    use EnumUtil;

    case SIGHTSEEING = 'sightseeing';     // Điểm tham quan
    case FOOD = 'food';                   // Điểm ăn uống
    case ENTERTAINMENT = 'entertainment';// Điểm giải trí
    case REST = 'rest';                   // Điểm nghỉ ngơi
    case SHOPPING = 'shopping';           // Điểm mua sắm
}
