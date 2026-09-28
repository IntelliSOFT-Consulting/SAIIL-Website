export interface GalleryItem {
  src: string;
  step: string;
  desc: string;
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  {
    src: "/Resources/itb-01-welcome.png",
    step: "01 · Sign in",
    desc: "Implementers log into the Test Bed with their organisation account before submitting a system for validation.",
    alt: "SAIIL Interoperability Test Bed sign-in screen",
  },
  {
    src: "/Resources/itb-02-suite.png",
    step: "02 · Run the suite",
    desc: "The SAIIL (IPS) Payload Validation Suite checks Patient, Condition, Immunization, CarePlan and more against the national profile.",
    alt: "SAIIL IPS Payload Validation Suite test list",
  },
  {
    src: "/Resources/itb-03-session-trace.png",
    step: "03 · Trace the session",
    desc: "Every request between the client system, the reference HAPI FHIR server, and the test engine is logged step by step.",
    alt: "Sequence diagram tracing a test session between client, HAPI server and test engine",
  },
  {
    src: "/Resources/itb-04-report.png",
    step: "04 · Get a report",
    desc: "Failures come back with the exact FHIR path, error code, and diagnostics - something implementers can act on, not just a red X.",
    alt: "Downloadable test case report showing a validation failure with diagnostics",
  },
  {
    src: "/Resources/itb-05-dashboard.png",
    step: "05 · Track conformance",
    desc: "Pass rates roll up by specification, so ministries and implementers can see readiness at a glance.",
    alt: "Dashboard tracking pass rates across specifications",
  },
];
