module.exports = {
    post: {
        tags: ['Authentication operations'],
        description: 'Login with email and password',
        operationId: 'login',
        parameters: [],
        requestBody: {
            content: {
                'application/x-www-form-urlencoded': {
                    schema: {
                        $ref: '#components/schemas/auth',
                    },
                },
            },
        },
        responses: {
            200: {
                description: 'Login successful',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/token',
                        },
                    },
                },
            },
            400: {
                description: 'Error object',
            },
        },
    },
};
