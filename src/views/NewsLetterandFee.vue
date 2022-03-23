<template>
    <div class="main">
        <div class="newsletter">
            <form @submit.prevent="uploadDoc">
                <input name="file" type="file" ref="myFiles" id="files" accept=".pdf, .docx" @change="previewFiles" multiple required/>
                <button type="submit" id="submit">Submit</button>
            </form>
        </div>
    </div>
</template>
<script>

import {storage} from "@/firebase.js";
import {ref, uploadBytes} from "firebase/storage";
export default {
    data() {
        return {
            files: [],
        }
    },  
    methods: {
        uploadDoc(e){
            this.file = this.$myFiles.files
            // const storageRef = ref(storage, + file.name)
            console.log(this.files);
        }
                     
    }

}
</script>
<style>
    
</style>