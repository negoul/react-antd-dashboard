import {FIELD_TYPE} from 'config/action-bar.config';





export const INPUT_CONFIG = [

    {
        name: 'title',
        inputType: FIELD_TYPE.TEXT,
        label: 'title',
        rules: [{
            required: true,
            message: 'please enter title!',
        }],
    },
    {
        name: 'body',
        inputType: FIELD_TYPE.TEXT,
        label: 'description',
        rules: [{
            required: true,
            message: 'please enter description!',
        }],
    }, {
        name: 'userId',
        inputType: FIELD_TYPE.TEXT,
        label: 'userId',
        rules: [{
            required: true,
            message: 'please enter userId!',
        }],
    },
];
