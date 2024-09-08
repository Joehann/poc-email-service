import { DataMailBuilder } from "./DataMailBuilder.ts"
import { FakeMailContextBuilder } from "./DataMailBuilder.ts/builders/fake-mail-context-builder"

console.log('Running...')

const builtContext = DataMailBuilder(FakeMailContextBuilder())
    .from('sender@mail.com')
    .to('recipient@mail.com')
    .cc('copy@mail.com')
    .attach({name: 'filename_1', file: 'file_1'})
    .attach([{name: 'filename_2', file: 'file_2'}, 
        {name: 'filename_3', file: 'file_3'}])
    .context({
        firstname: "John",
        lastname: 'Doe'
    })
    .build()

console.log(builtContext)