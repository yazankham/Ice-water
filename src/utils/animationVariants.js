export const pageLoadContainerVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 2
    }
  },
  exit: {
    opacity: 0
  }
}

export const pageLoadLogoVariants = {
  offscreen: {
    opacity: 0,
    scale: 0,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    rotate: [0, 10, 0],
    transition: {
      type: "spring",
      delay: 0.2,
      duration: 2
    }
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.8
    }
  }
}

export const navBarVariants = {
  offscreen: {
    opacity: 0,
    y: "-15%"
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 125,
      mass: 0.2,
      damping: 20,
    }
  }
}

export const sectionVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.2,
      duration: 2,
    },
  },
};

export const textVariants = {
  offscreen: {
    x: "-10%",
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.2,
      duration: 5
    },
  },
};

export const chatVariants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 180,
      mass: 0.2,
      damping: 20,
    }
  }
}

export const sustainabilityIconVariants = {
  hidden: {
    y: "-25%",
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,
  },
};

export const howItWorksContainerVariants = {
  offscreen: { opacity: 1, scale: 0 },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.3
    }
  }
};

export const howItWorksItemVariants = {
  offscreen: { y: 10, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.3
    }
  }
};

export const tableBulletVariants = {
  offscreen: {
    opacity: 0,
    scale: 0,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      mass: 0.2,
      damping: 20,
    }
  }
}

export const esgCareIconVariants = {
  offscreen: {
    opacity: 0,
    scale: 1,
  },
  onscreen: {
    opacity: 1,
    scale: [.9, 1.1, 1],
    transition: {
      type: "spring",
      duration: 2.5,
      stiffness: 150,
      mass: 0.2,
      damping: 20,
    }
  }
}

export const pricingCalloutVariants = {
  offscreen: {
    opacity: 0,
    scale: 0,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 2.5,
      stiffness: 50,
      mass: 0.2,
      damping: 20,
    }
  }
}