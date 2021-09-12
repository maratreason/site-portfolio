export const animationOne = {
    in: {
        opacity: 1,
        x: 300,
    },
    out: {
        opacity: 0,
        x: -300,
    },
    end: {
        x: 0,
        opacity: 1,
    }
};

export const animationTwo = {
    in: {
        opacity: 1,
        y: 0,
        scale: 1,
    },
    out: {
        opacity: 0,
        y: "-100vh",
        scale: 0.3
    }
};

export const animationThree = {
    in: {
        opacity: 1,
        x: -300,
    },
    out: {
        opacity: 0,
        x: 300,
    },
    end: {
        x: 0,
        opacity: 1,
    }
};

export const animationText = {
    in: {
        x: -1000,
    },
    out: {
        x: 0,
    },
};

export const animationButton = {
    in: {
        x: -2000,
        transition: {
        }
    },
    out: {
        x: 0,
        transition: {
            delay: 0.7
        }
    },
};

export const animationTextRight = {
    in: {
        x: 2000,
    },
    out: {
        x: 0,
    },
};

export const animationPicture = {
    in: {
        x: 1000,
    },
    out: {
        x: 0,
    },
};

export const transition = {
    duration: 0.4,
};

export const listVariants = {
    visible: (i: number) => ({
        x: 0,
        transition: {
            delay: (i+4) * 0.1,
        }
    }),
    hidden: {
        x: -1000
    }
}

export const animationProject = {
    visible: (i: number) => ({
        x: 0,
        transition: {
            delay: (i+10) * 0.1,
        }
    }),
    hidden: {
        x: 2000
    }
};
