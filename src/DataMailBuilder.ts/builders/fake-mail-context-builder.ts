export const FakeMailContextBuilder = (): IMailContextBuilder => {
    
        const buildContext = (data: any) => {
            console.log("FakeMailContextBuilder: Building with data", data);
            return {
                ...data,
                builtAt: new Date().toISOString(),
                status: "built"
            };
        }

    return {buildContext}
};
