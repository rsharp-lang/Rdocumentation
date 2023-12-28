imports "package_utils" from "devkit";

require(REnv);

# set input/export
const vignettes   = `${dirname(@dir)}/vignettes`;
const app_dir     = @HOME;
const clr_modules = ["REnv.dll" "Rlapack.dll" "roxygenNet.dll" "Rserve.dll" "Rserver.dll"
                     "Rstudio.dll" "signalKit.dll" "snowFall.dll" "webKit.dll" "base.dll"
                     "devkit.dll" "graphics.dll" "igraph.dll" "MLkit.dll" "njl.dll"
                     "npy.dll" "nts.dll" "Parallel.dll" "RData.dll"];

for(dll_name in clr_modules) {
    str(dll_name);

    # generates the html help documents
    for(pkg_namespace in package_utils::parseDll(dll = `${app_dir}/${dll_name}`)) {
        Rdocuments(pkg_namespace, outputdir = `${vignettes}/${basename(dll_name)}`, 
            package = "R");
    }
}
