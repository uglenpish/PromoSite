<?php

use yii\db\Migration;

/**
 * Class m211023_185016_skils_comment_and_about
 */
class m211023_185016_skils_comment_and_about extends Migration
{
    private const TABLE_OPTIONS = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';

    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('groups', [
            'id' => $this->primaryKey(),
            'title' => $this->string(40)->notNull(),
        ], self::TABLE_OPTIONS);

        $this->createTable('skills', [
            'id' => $this->primaryKey(),
            'group_id' => $this->integer()->notNull()->unique(),
            'title' => $this->string(40)->notNull(),
            'percent' => $this->integer()->notNull(),
        ], self::TABLE_OPTIONS);

        $this->addForeignKey(
            'skills_group_id',
            'skills',
            'group_id',
            'groups',
            'id'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m211023_185016_skils_comment_and_about cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m211023_185016_skils_comment_and_about cannot be reverted.\n";

        return false;
    }
    */
}
