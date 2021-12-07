module.exports = {
    post: {
        tags: ['Authentication operations'],
        description: 'Signup with email and password',
        operationId: 'signup',
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
                description: 'Signup successful',
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
