export const isMobile = () => {
    if (window.innerWidth < 768) {
        return true;
    }

    return false;
};

export const isTablet = () => {
    if (window.innerWidth >= 769 && window.innerWidth <= 1024) {
        return true;
    }

    return false;
};

export const isDesktop = () => {
    if (window.innerWidth > 1025) {
        return true;
    }

    return false;
};

export const is1200 = () => {
    if (window.innerWidth <= 1200) {
        return true;
    }

    return false;
};
