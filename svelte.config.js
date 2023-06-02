import adapter from "@sveltejs/adapter-auto";

const config = {
    kit: {
        adapter: adapter({
            edge: false,
            split: false,
        }),
    },
};

export default config;
