<?php

namespace app\models;

use yii\db\ActiveRecord;
use app\models\Skill;

/**
 * @property integer $id
 * @property string $title
 */
class Groups extends ActiveRecord
{
    /**
     * @return string
     */
    public static function tableName(): string
    {
        return 'groups';
    }

    /**
     * @return array[]
     */
    public function rules(): array
    {
        return [
            [['title'], 'required'],
            [['title'], 'unique'],
            [['title'], 'string'],
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getSkills(): \yii\db\ActiveQuery
    {
        return $this->hasMany(Skill::class, ['group_id' => 'id']);
    }
}