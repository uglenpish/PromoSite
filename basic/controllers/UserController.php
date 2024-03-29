<?php

namespace app\controllers;



use app\models\User;

class UserController extends BaseApiController
{
    public $modelClass = User::class;

    /** @var bool */
    public $enableCsrfValidation = false;

    /**
     * @return array
     */
    public function actions()
    {
        $actions = parent::actions(); // TODO: Change the autogenerated stub
        unset($actions['create']);
        return $actions;
    }

    public function actionCreate()
    {
        $request = \Yii::$app->request->post();

        $model = new User();
        $model->access_token = $request['user']['access_token'];
        $model->username = $request['user']['username'];
        $model->email = $request['user']['email'];
        $model->birthday = $request['user']['birthday'];
        $model->password = $request['user']['password'];
        $model->save();
        return $request['user']['email'];
    }
//
//    public function actionLogin()
//    {
//
//    }
}