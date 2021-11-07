<?php

namespace app\controllers;

use app\models\Groups;

class GroupController extends BaseApiController
{
    public $modelClass = Groups::class;
}