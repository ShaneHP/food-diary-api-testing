module.exports = {
    get: {
        tags: ['Analytics operations'],
        description:
            'Get data on when a user ate when they were hungry vs. not hungry',
        operationId: 'hungry',
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
        ],
        responses: {
            200: {
                description: 'Hungry vs. not hungry data',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/hungryData',
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
