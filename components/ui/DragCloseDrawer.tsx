"use client";
import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import useMeasure from "react-use-measure";
import { useDragControls, useMotionValue, useAnimate, motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa";
import ContactForm from "./ContactForm";

export const DragCloseDrawerExample = () => {
  const [open, setOpen] = useState(false);
  const [xsubmitted, setXSubmitted] = useState(false); 

  React.useEffect(() => {
    if (open && xsubmitted) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, 4000);
      return () => clearTimeout(timer); 
    }
  }, [open, xsubmitted]);

  return (
    <div className="pt-10 mb-5 place-content-center">
      <button
        className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] md:w-60 md:mt-10"
        onClick={() => setOpen(true)}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
          <FaLocationArrow />
          Get in touch
        </span>
      </button>
      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          <h2 className="text-4xl font-bold text-neutral-200">
            I&apos;m ready to receive your message
          </h2>
          <ContactForm xsubmitted={xsubmitted} setXSubmitted={setXSubmitted} />
        </div>
      </DragCloseDrawer>
    </div>
  );
};

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

export const DragCloseDrawer = ({ open, setOpen, children }: Props) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();
  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ ease: "easeInOut" }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
