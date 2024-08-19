import axios from 'axios';
const saveCode = async(code: string, language: string) => {
    try{
        const response = await axios.post('/save_code.php', {
            code, language
        });
        console.log(response.data);
    } catch(error) {
        console.error(error);
    }
};
const executeCode = async(snippetId: number) => {
    try {
        const response = await axios.post('/execute_code.php, {snipped_id: snippedId}');
        console.log(response.data);
    } catch(error) {
        console.error(error);
    }
};
saveCode('<?php echo "hello, world!"; ?>', 'php');
executeCode(1);