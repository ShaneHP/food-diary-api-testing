module.exports = {
    get: {
        tags: ['Analytics operations'],
        description:
            'Get the traffic light values of a specific nutrient for the foods eaten by a user today',
        operationId: 'trafficChart',
        parameters: [
            {
                name: 'Authorization',
                in: 'header',
                schema: {
                    $ref: '#components/schemas/authorization',
                },
                required: true,
                description: 'JWT token which gives access to this endpoint',
            },
            {
                name: 'userId',
                in: 'query',
                schema: {
                    $ref: '#components/schemas/userId',
                },
                required: true,
                description: 'ID of specified user',
            },
            {
                name: 'nutrient',
                in: 'query',
                schema: {
                    $ref: '#components/schemas/nutrient',
                },
                required: true,
                description: 'The nutrient we want traffic light data about',
            },
        ],
        responses: {
            200: {
                description:
                    'The traffic light values of a specific nutrient for the foods eaten by a user today',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/trafficChart',
                        },
                    },
                },
            },
            404: {
                description: 'Resource not found',
            },
        },
    },
};
