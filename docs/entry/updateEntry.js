module.exports = {
    patch: {
        tags: ['Diary entry CRUD operations'],
        description: 'Update diary entry',
        operationId: 'updateEntry',
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
        requestBody: {
            content: {
                'application/x-www-form-urlencoded': {
                    schema: {
                        $ref: '#components/schemas/entry',
                    },
                },
            },
        },
        responses: {
            200: {
                description: 'Updated entry',
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
