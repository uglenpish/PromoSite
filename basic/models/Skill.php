<?php

namespace app\models;

use yii\db\ActiveRecord;

class Skill extends ActiveRecord
{
    /**
     * @return string
     */
    public static function tableName(): string
    {
        return 'skills';
    }
}