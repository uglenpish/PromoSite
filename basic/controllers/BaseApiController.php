<?php

namespace app\controllers;

use yii\filters\ContentNegotiator;
use yii\filters\Cors;
use \yii\rest\ActiveController;
use yii\web\Response;


class BaseApiController extends ActiveController
{
    /**
     * @return array[]
     */
    public function behaviors(): array
    {
        return [
            'corsFilter' => [
                'class' => Cors::class,
                'cors' => [
                    'Origin' => ['*'],
                    'Access-Control-Method' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
                    'Access-Control-Request-Headers' => ['*'],
                    'Access-Control-Allow-Credentials' => null,
                    'Access-Control-Expose-Headers' => ['*'],
                ]
            ],
            'contentNegotiator' => [
                'class' => ContentNegotiator::class,
                'formats' => [
                    'application/json' => Response::FORMAT_JSON,
                ]
            ],
        ];
    }
}
