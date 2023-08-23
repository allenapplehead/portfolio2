<script>
export default {
    data: () => {
        return {
            // This should be updated manually or via a build tool/script before each deployment
            lastModifiedDate: "2023-08-23",
        };
    },
};
</script>

<template>
    <div class="flex justify-center items-center text-center">
        <div class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light">
            Last Modified: {{ lastModifiedDate }}
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
