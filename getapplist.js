require("LSApplicationWorkspace, NSPredicate");

defineClass("UIDevice", {}, {
            getList: function() {
           
            var workspace = LSApplicationWorkspace.defaultWorkspace();
            var array = workspace.allApplications();
            array = array.valueForKeyPath("boundApplicationIdentifier");
            var pre = NSPredicate.predicateWithFormat("NOT (self BEGINSWITH[cd] %@) ", "com.apple");
            array = array.filteredArrayUsingPredicate(pre);
            return array;
            }
            });
//    [[LSApplicationWorkspace performSelector:@selector(defaultWorkspace)] performSelector:@selector(openSensitiveURL:withOptions:) withObject:url withObject:nil];
