module.exports = {
    get: {
        tags: ['Authentication operations'],
        description: 'Get information of currently logged in user',
        operationId: 'checkUser',
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
        responses: {
            200: {
                description: 'User information',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/user',
                        },
                    },
                },
            },
            403: {
                description: 'Unauthorised access',
            },
            500: {
                description: 'Error with token',
            },
        },
    },
};
