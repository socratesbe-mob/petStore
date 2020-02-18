exports.listPets = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(
        {
        message: 'getPet API',
        names: ['Tom','Jerry','Spike','Bob'],
        date: new Date()
        }
            
            
            ),
    };
    return response;
};