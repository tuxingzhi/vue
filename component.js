
// 参数里面之所以有undefined，是为了防止undefined被污染。
(function (window,$,Vue,undefined) {
    Vue.component('big-box', {
        template: '#bigBox',
        props: ['treeObj'],
        data:function () {
            return {
                tipIsShow:false,
            }
        },
        methods: {

        },
    });


    /* tab切换*/
    Vue.component("component-tab", {
        template: "#template-tab",
        data: function () {
            return {
                index: 0
            }
        },
        props: ["tabList", "handle"],
        methods: {
            Switch: function (index) {
                var disName = this.handle;
                this.index = index;
                if (!!disName) {
                    this.$dispatch(disName, this.index);
                }
            }
        }
    });

    /*下拉菜单*/
    Vue.component("component-combobox", {
        template: "#template-combobox",
        props: ["comboboxTitle", "comboboxList", "dispatch", "comboboxType", "keyName", "addedName", "unchangeTitle", "icon", "dispatchHd"],
        methods: {
            handle: function (index, keyName, addedName, unchangeTitle) {
                $(this.$el).find(".combobox-con").slideUp();
                var disName = this.dispatch;
                if (!!disName) {
                    this.$dispatch(disName, index);
                }
                if (unchangeTitle === 'true')  return ;
                this.comboboxTitle = (addedName===undefined ? '':addedName )+ this.comboboxList[index][keyName];
               
            },
            toggleMenu: function () {
                var disName = this.dispatchHd;
                if (!!disName) {
                    this.$dispatch(disName);
                }
                $(this.$el).find(".combobox-con").slideToggle();
                $('[p-type^="combobox"]').not(this.$el).find('.combobox-con').slideUp();
            },
        }
    });

})(window,jQuery,Vue)
