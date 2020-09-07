import cn from '../lang/cn'
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale';
export function initLang() {
    var i18n=new VueI18n({
        locale:"cn",
        messages:{
            'cn':cn,
        }
    })
    locale.i18n((key, value) => i18n.t(key, value))
    return i18n
}

