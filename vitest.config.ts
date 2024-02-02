import { defineConfig } from 'vitest/config'

export default defineConfig(()=>{
    return { 
        test:{
                globals:true,
                setupFiles: 'src/test/setup.ts',
                environment: 'jsdom',
        },
    }
})