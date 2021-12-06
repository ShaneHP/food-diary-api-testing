module.exports = {
    delete: {
        tags: ['Diary entry CRUD operations'],
        description: 'Delete diary entry by ID',
        operationId: 'deleteEntry',
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
                description: 'Deleted entry',
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
