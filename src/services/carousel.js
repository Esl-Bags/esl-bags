export default httpClient => ({
    get: async () => {
        const response = await httpClient.get('/product/carousel/')
        const erros = null

        if (!response.data) {
            erros = {
                status: response.request.status,
                statusText: response.request.statusText
            }
        }
        return {
            data: response.data,
            erros
        }
    }
})