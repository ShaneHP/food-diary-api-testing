module.exports = {
    post: {
        tags: ['Diary entry CRUD operations'],
        description: 'Create a diary entry',
        operationId: 'createEntry',
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
        ],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#components/schemas/entry',
                    },
                },
            },
        },
        responses: {
            200: {
                description: 'Added entry',
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
