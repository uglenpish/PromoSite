<?php

use yii\db\Migration;

/**
 * Class m211001_131745_init
 */
class m211001_131745_init extends Migration
{
    private const TABLE_OPTIONS = "CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB";

    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('user', [
            'id' => $this->primaryKey(),
            'username' => $this->string(20)->notNull(),
            'email' => $this->string(40)->notNull(),
            'password' => $this->string(32)->notNull(),
            'access_token' => $this->string(40)->notNull(),
            'birthday' => $this->date()->notNull(),
        ], self::TABLE_OPTIONS);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m211001_131745_init cannot be reverted.\n";

        return false;
    }
}
