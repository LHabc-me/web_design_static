<template>
    <div class="archive shadow radius">
        <div class="archive-content">
            <n-h1>C++中编译器内建支持的标准库组件</n-h1>
            <n-divider/>
            <n-h2>
                C++标准库中存在一些和编译器紧密关联的模板和函数，本文将依次列举
            </n-h2>

            <n-ul>
                <n-li>type_traits</n-li>
                <text>
                    <span class="grey-bg">is_union</span>、<span class="grey-bg">is_class</span>等判断类的区别的，判断是否是标准布局的，判断类的构造方式的，判断是否trivial的，判断是否是虚函数的，判断是否是空类的...
                </text>


                <n-li>std::initializer_list</n-li>
                <text>
                    编译器看到被大括号包起来的东西，就会尝试将其转化成<span class="grey-bg">initializer_list</span>类型，这也无法手工实现
                </text>
                <n-code show-line-numbers
                        class="code-bg"
                        language="cpp"
                        :code="`auto test = {0};
cout << boolalpha << (typeid(test) == typeid(initializer_list<int>)); //true`"/>


                <n-li>类型相关</n-li>
                <text>
                    如<span class="grey-bg">std::type_info</span>
                </text>


                <n-li>可以实现但效率不高的</n-li>
                <text>如<span class="grey-bg">std::make_index_sequence</span>，手动实现要实例化n个模板</text>


                <n-li>其他</n-li>
                <text>
                    <span class="grey-bg">std::is_constant_evaluated</span> 判断是否在编译器调用<br>
                    <span class="grey-bg">std::source_location</span> 获取源代码位置信息<br>
                    某些带着constexpr修饰但无法手工实现的函数，如<span class="grey-bg">constexpr std::address_of</span>
                </text>

            </n-ul>
        </div>
    </div>
</template>

<script>
import {NH1, NH2, NH3, NH4, NUl, NOl, NLi, NButton, NDivider, NCode, NA, NText} from "naive-ui";

export default {
    name: "ArchiveThree",
    components: {
        NH1,
        NH2,
        // NH3,
        // NH4,
        // NOl,
        NUl,
        NLi,
        // NButton,
        NCode,
        NDivider,
        // NText
    },
}
</script>

<style lang="less" scoped>


li {
  font-size: 26px;
  margin-top: 30px;
}

.archive {
  width: 100%;
  background: white;
  margin: 20px 0;
}

.archive-content {
  margin: 50px;
}

</style>