import React from 'react';
import { useEffect, useState } from 'react';
import localFont from 'next/font/local';
import './loadingPage.css';

const monumentExtendedd = localFont({
  src: '../MonumentExtended-Regular.otf',
});

interface LoadingComponentProps {
  onComplete: () => void;
}

export default function loadingPage({ onComplete }: LoadingComponentProps) {
  const [visible, setVisible] = useState(true);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const hasLoaded = localStorage.getItem('hasLoaded');

    if (hasLoaded) {
      setVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setAnimationClass('slide-up');
      setTimeout(() => {
        setVisible(false);
        localStorage.setItem('hasLoaded', 'true');
        if (onComplete) {
          onComplete();
        }
      }, 1000);
    }, 8000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className={`loading-container ${animationClass}`}>
      <div className="block_1">
        <div className="marquee-container">
          <div className="marquee">
            <p className={`${monumentExtendedd.className} title_blue`}>
              BRAND DIGITAL
            </p>
            <p className={`${monumentExtendedd.className}`}>DESIGN SYSTEM</p>
            <p className={`${monumentExtendedd.className}`}>INTERACTIVE</p>
            <p className={`${monumentExtendedd.className} title_blue`}>
              BRAND DIGITAL
            </p>
            <p className={`${monumentExtendedd.className}`}>DESIGN SYSTEM</p>
            <p className={`${monumentExtendedd.className}`}>INTERACTIVE</p>
          </div>
        </div>
        <div className="marquee-container">
          <div className="marquee_right">
            <p className={`${monumentExtendedd.className}`}>ANNIE TRAN</p>
            <p className={`${monumentExtendedd.className} title_blue`}>
              PRODUCT DESIGN
            </p>
            <p className={`${monumentExtendedd.className}`}>WEBFLOW</p>
            <p className={`${monumentExtendedd.className}`}>ANNIE TRAN</p>
            <p className={`${monumentExtendedd.className} title_blue`}>
              PRODUCT DESIGN
            </p>
            <p className={`${monumentExtendedd.className}`}>WEBFLOW</p>
          </div>
        </div>
        <div className="marquee-container">
          <div className="marquee">
            <p className={`${monumentExtendedd.className}`}>FRANCE</p>
            <p className={`${monumentExtendedd.className}`}>
              BLENDER - TREE.JS
            </p>
            <p className={`${monumentExtendedd.className} title_blue`}>
              UX/UI DESIGNER
            </p>
            <p className={`${monumentExtendedd.className}`}>FRANCE</p>
            <p className={`${monumentExtendedd.className}`}>
              BLENDER - TREE.JS
            </p>
            <p className={`${monumentExtendedd.className} title_blue`}>
              UX/UI DESIGNER
            </p>
          </div>
        </div>
      </div>
      <div className="block_2">
        <div className="marquee-container">
          <div className="marquee">
            <p className={`${monumentExtendedd.className} title_blue`}>
              BRAND DIGITAL
            </p>
            <p className={`${monumentExtendedd.className}`}>DESIGN SYSTEM</p>
            <p className={`${monumentExtendedd.className}`}>INTERACTIVE</p>
            <p className={`${monumentExtendedd.className} title_blue`}>
              BRAND DIGITAL
            </p>
            <p className={`${monumentExtendedd.className}`}>DESIGN SYSTEM</p>
            <p className={`${monumentExtendedd.className}`}>INTERACTIVE</p>
          </div>
        </div>
        <div className="marquee-container">
          <div className="marquee_right">
            <p className={`${monumentExtendedd.className}`}>ANNIE TRAN</p>
            <p className={`${monumentExtendedd.className} title_blue`}>
              PRODUCT DESIGN
            </p>
            <p className={`${monumentExtendedd.className}`}>WEBFLOW</p>
            <p className={`${monumentExtendedd.className}`}>ANNIE TRAN</p>
            <p className={`${monumentExtendedd.className} title_blue`}>
              PRODUCT DESIGN
            </p>
            <p className={`${monumentExtendedd.className}`}>WEBFLOW</p>
          </div>
        </div>
        <div className="marquee-container">
          <div className="marquee">
            <p className={`${monumentExtendedd.className}`}>FRANCE</p>
            <p className={`${monumentExtendedd.className}`}>
              BLENDER - TREE.JS
            </p>
            <p className={`${monumentExtendedd.className} title_blue`}>
              UX/UI DESIGNER
            </p>
            <p className={`${monumentExtendedd.className}`}>FRANCE</p>
            <p className={`${monumentExtendedd.className}`}>
              BLENDER - TREE.JS
            </p>
            <p className={`${monumentExtendedd.className} title_blue`}>
              UX/UI DESIGNER
            </p>
          </div>
        </div>
      </div>
      <p className={`${monumentExtendedd.className} title_loading`}>
        Annie Tran
      </p>
    </div>
  );
}
