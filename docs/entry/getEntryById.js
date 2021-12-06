module.exports = {
    get: {
        tags: ['Diary entry CRUD operations'],
        description: 'Get specific diary entry by its ID',
        operationId: 'getEntryById',
        parameters: [
            {
                name: 'id',
                in: 'path',
                schema: {
                    $ref: '#components/schemas/id',
                },
                required: true,
                description: 'ID of diary entry',
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
                description: 'Diary entry was obtained',
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
