var controllersLocation = "plugins/nursing/assets/controllers/";

head.load(controllersLocation+'settings/manage-observation-type-controller.js');
head.load(controllersLocation+'settings/manage-observation-type-fields-controller.js');
head.load(controllersLocation+'settings/link-consultant-departments-controller.js');
head.load(controllersLocation+'settings/manage-wards-controller.js');
head.load(controllersLocation+'settings/admission-billing-items-controller.js');

head.load(controllersLocation+'nursing-queued-patients-controller.js');
head.load(controllersLocation+'nursing-patient-workspace-controller.js');
head.load(controllersLocation+'nursing-patient-admission-controller.js');
head.load(controllersLocation+'manage-beds-controller.js');
head.load(controllersLocation+'ward-management-controller.js');

head.load(controllersLocation+'treatment-chart-directive.js');
head.load(controllersLocation+'services-rendered-directive.js');