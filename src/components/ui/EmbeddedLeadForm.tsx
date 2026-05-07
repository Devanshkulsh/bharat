import { useEffect, useRef } from 'react';

type EmbeddedLeadFormProps = {
  containerId: string;
  mirrorFromId?: string;
  className?: string;
};

const FORM_SCRIPT_SRC = 'https://ntechzy.in/api/v1/student-form/form.js';

function mountNtechzyForm(containerId: string) {
  const existing = document.querySelector(`script[data-form-divid="${containerId}"]`);
  if (existing) return;

  const script = document.createElement('script');
  script.type = 'module';
  script.src = FORM_SCRIPT_SRC;
  script.setAttribute('path', '["/", "/dynamicForm/index.html","/admissions"]');
  script.setAttribute('divid', containerId);
  script.setAttribute('courses', '["Select Course","BAMS"]');
  script.setAttribute('styles', 'classic');
  script.setAttribute('logo', '/logo.png');
  script.setAttribute('contact', '9084681367');
  script.setAttribute('data-form-divid', containerId);
  document.body.appendChild(script);
}

export default function EmbeddedLeadForm({ containerId, mirrorFromId, className = '' }: EmbeddedLeadFormProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mirrorFromId) {
      mountNtechzyForm(containerId);
      return;
    }

    const target = containerRef.current;
    const source = document.getElementById(mirrorFromId);
    if (!target || !source) return;

    const sync = () => {
      target.innerHTML = source.innerHTML;
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(source, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [containerId, mirrorFromId]);

  return <div id={containerId} ref={containerRef} className={className} />;
}

