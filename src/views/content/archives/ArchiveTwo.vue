<template>
    <div class="archive shadow radius">
        <div class="archive-content">
            <n-h1>WebAssembly初体验</n-h1>
            <n-divider/>
            <n-h2>
                使用Emscripten将C++编译到wasm，实现与js的交互
            </n-h2>
            <n-ol>
                <n-li>安装Emscripten SDK</n-li>
                <n-code show-line-numbers
                        class="code-bg"
                        language="bash"
                        :code="`git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
./emsdk install 1.39.8`"/>
                <text>emsdk-1.39.8可以用于编译Qt5.15，已经过官方测试</text>


                <n-li>激活</n-li>
                <n-code show-line-numbers
                        class="code-bg"
                        language="bash"
                        :code="`./emsdk activate 1.39.8
source ./emsdk_env.sh`"/>


                <n-li>初步尝试</n-li>
            </n-ol>

            <n-ul>
                <n-li>源代码</n-li>
                <n-code show-line-numbers
                        class="code-bg"
                        language="cpp"
                        :code="firstTry"/>

                <n-li>编译</n-li>
                <n-code show-line-numbers
                        class="code-bg"
                        language="cpp"
                        :code="`em++ hello.cc -s WASM=1 -o hello.js`"/>
                <text>会生成<span class="grey-bg">hello.js</span>和<span class="grey-bg">hello.wasm</span></text>

                <n-li>运行</n-li>
                <n-code show-line-numbers
                        class="code-bg"
                        language="cpp"
                        :code="`node hello.js`"/>

                <n-li>输出</n-li>
                <text class="grey-bg">'Hello World' from C++</text>
            </n-ul>
        </div>
    </div>
</template>

<script>
import {NH1, NH2, NUl, NOl, NLi, NDivider, NCode} from "naive-ui";

export default {
    name: "ArchiveTwo",
    components: {
        NH1,
        NH2,
        NOl,
        NUl,
        NLi,
        NCode,
        NDivider
    },
    setup() {
        return {
            firstTry: `#include <iostream>
int main(int argc, char** argv)
{
    std::cout << "'Hello World' from C++" << '\\n';
}`
        }
    }
}
</script>

<style lang="less" scoped>
ol {
  li {
    font-size: 26px;
    margin-top: 30px;
  }
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