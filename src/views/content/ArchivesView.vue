<template>
    <div class="full">
        <n-h1 id="archives">Archives</n-h1>
        <div layout="column center-left">
            <n-card class="archive-card shadow radius"
                    @click="$router.push('/archives/' + item.name)"
                    v-for="(item, index) in archives"
                    :key="index"
                    :title="item.title"
                    :segmented="{
                      content: true,
                      footer: 'soft'
                    }">
                <div class="brief">
                    {{ item.brief }}
                </div>
                <div class="tag-container"
                     layout="row center-left">
                    <n-tag class="tag"
                           v-for="(tag, index) in item.tags"
                           :key="index"
                           size="small"
                           type="primary">
                        {{ tag }}
                    </n-tag>
                </div>
            </n-card>
        </div>
    </div>
</template>

<script>

import {NH1, NCard, NTag} from "naive-ui";

export default {
    name: "ArchivesView",
    components: {
        NCard,
        NTag,
        NH1
    },
    setup() {
        return {
            archives: [
                {
                    name: 'deepin',
                    title: 'deepin操作系统初步尝试',
                    brief: '将deepin作为主力操作系统已有半年，特写此文总结遇到的各种坑，附解决方法',
                    tags: [
                        'deepin',
                        'Linux',
                        '操作系统',
                        '坑',
                        '解决方法'
                    ]
                },
                {
                    name: 'webassembly',
                    title: 'WebAssembly初体验',
                    brief: '使用Emscripten将C++编译到wasm，实现与js的交互',
                    tags: [
                        'WebAssembly',
                        'Emscripten',
                        'C++',
                        'JavaScript',
                        '交互'
                    ]
                },
                {
                    name: 'cpp-builtin',
                    title: 'C++中编译器内建支持的标准库组件',
                    brief: '标准库中存在一些和编译器紧密关联的模板和函数，本文将依次列举',
                    tags: [
                        'C++',
                        '标准库',
                        '编译器',
                        '内建',
                        '支持',
                        '组件'
                    ]
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.archive-card {
  width: 80%;
  margin: 10px 0;
  //background: #ecf0f1;

  :hover {
    cursor: pointer;
  }


  .brief {
    height: 70px;
  }

  .tag {
    margin: 0 5px;
  }
}

#archives {
  font-size: 30px;
  font-weight: bold;
}
</style>