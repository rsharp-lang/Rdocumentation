imports "package_utils" from "devkit";

require(REnv);

const vignettes   = `${dirname(@dir)}/vignettes`;
const app_dir     = @HOME;
const clr_modules = [];

for(dll_name in clr_modules) {
    for(pkg_namespace in package_utils::parseDll(dll = `${app_dir}/${dll_name}`)) {
        Rdocuments(pkg_namespace, outputdir = `${vignettes}/${basename(dll_name)}`, 
            package = "R");
    }
}
