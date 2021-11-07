<?php

namespace app\models;

use yii\db\ActiveRecord;
use yii\web\IdentityInterface;

/**
 * @property integer $id
 * @property string $username
 * @property string $access_token
 * @property string $email
 * @property string password
 * @property $birthday
 **/
class User extends ActiveRecord implements IdentityInterface
{
    /**
     * @inheritdoc
     */
    public static function tableName(): string
    {
        return 'user';
    }

    /**
     * @return array|null|ActiveRecord
     */
    public static function getUser($id)
    {
      return static::findOne(['id' => $id]);
    }

    public static function findIdentity($id)
    {
        // TODO: Implement findIdentity() method.
    }


    public static function findIdentityByAccessToken($token, $type = null)
    {
        return static::findOne(['access_token' => $token]);
    }

    public function getId()
    {
        // TODO: Implement getId() method.
    }

    public function getAuthKey()
    {
        // TODO: Implement getAuthKey() method.
    }

    public function validateAuthKey($authKey)
    {
        // TODO: Implement validateAuthKey() method.
    }
}
