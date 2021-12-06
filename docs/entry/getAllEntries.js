module.exports = {
    get: {
        tags: ['Diary entry CRUD operations'],
        description: 'Get all diary entries for a specified user',
        operationId: 'getAllEntries',
        parameters: [
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
                name: 'Authorization',
                in: 'header',
                schema: {
                    $ref: '#components/schemas/authorization',
                },
                required: true,
                description: 'JWT token which gives access to this endpoint',
            },
        ],
        responses: {
            200: {
                description: 'Diary entries were obtained',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/entry',
                        },
                    },
                },
            },
            404: {
                description: 'Resource not found',
            },
            403: {
                description: 'No JWT token',
            },
        },
    },
};
