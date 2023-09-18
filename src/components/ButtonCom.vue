<template>
    <button :type="buttonType" class="buttonClasses">{{ text }}</button>
</template>

<script>
export default {
    props:{
        text:String,
        type: String,
        buttonClasses: String
    }
}
</script>

<style>

</style>