module.exports = {
    get: {
        tags: ['Analytics operations'],
        description:
            "Get a user's daily nutrient intake vs. the recommended daily intake",
        operationId: 'dailyNutrients',
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
                description: 'Daily nutrient data',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/dailyNutrientData',
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
