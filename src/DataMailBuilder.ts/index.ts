export const DataMailBuilder = <T>(mailContextBuilder: IMailContextBuilder) => {
    const data: Data = {}

    const builder = {
        from: (sender: string) => {
            data.from = sender;
            return builder;
        },
        to: (recipient: string) => {
            data.to = recipient;
            return builder;
        },
        subject:(subject: string) => {
            data.subject = subject;
            return builder
        },
        cc: (recipient: string) => {
            if (!data.cc) {
                data.cc = [];
            }
            data.cc.push(recipient);
            return builder;
        },
        ccc: (recipient: string) => {
            if (!data.ccc) {
                data.ccc = [];
            }
            data.ccc.push(recipient);
            return builder;
        },
        context: (contextData: T) => {
            data.context = mailContextBuilder.buildContext(contextData)
            return builder
        },
        attach: (attachments: Attachment | Attachment[]) => {
            if(!data.attachments){
                data.attachments = []
            }
            
            Array.isArray(attachments) 
                ? data.attachments.push(...attachments) 
                : data.attachments.push(attachments);
            
            return builder
        },
        priority: (level: PriorityLevel) => {
            data.priority = level;
            return builder;
        },
        build: () => {
            return { ...data };
        }
    };
    
    return builder;
} 


type Data = Partial<{
    from: string
    to: string
    cc: string[]
    ccc: string[]
    subject: string
    context: any
    attachments : Attachment[]
    priority: PriorityLevel
}>

type Attachment = {name: string, file: string}
type PriorityLevel = 'high' | 'normal' | 'low'