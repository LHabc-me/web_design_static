<template>
    <div class="archive shadow radius">
        <div class="archive-content">
            <n-h1>deepin操作系统初步尝试</n-h1>
            <n-divider/>
            <n-h2>
                将deepin作为主力操作系统已有半年，特写此文总结遇到的各种坑，附解决方法

            </n-h2>
            <text> 首先附上系统下载链接
                <n-a href="https://www.deepin.org/zh/download/" target="_blank">deepin</n-a>
                <br>
                可使用<span class="grey-bg">深度启动盘制作工具</span>制作启动盘并安装
            </text>
            <n-ol>
                <n-li>开机时打印引导日志</n-li>
                <text>
                    打开<span class="grey-bg">/boot/grub/grub.cfg</span>，找到
                </text>
                <br>
                <text class="grey-bg">linux /boot/vmlinuz-5.18.17-amd64-desktop-community-hwe root=UUID=9d7553b1-e478-411b-8952-4fc7866f13e1 ro splash quiet DEEPIN_GFXMODE=$DEEPIN_GFXMODE
                </text>
                <br>
                <text>
                    改为
                </text>
                <br>
                <text class="grey-bg">
                    linux /boot/vmlinuz-5.18.17-amd64-desktop-community-hwe root=UUID=9d7553b1-e478-411b-8952-4fc7866f13e1 ro splash quiet
                    <n-text type="info">loglevel=0</n-text>
                    DEEPIN_GFXMODE=$DEEPIN_GFXMODE
                </text>


                <n-li>使用管理员权限运行软件会打开文件夹时会出现蜂鸣声</n-li>
                <text>
                    禁用相关内核模块即可
                </text>
                <n-code show-line-numbers
                        class="code-bg"
                        language="bash"
                        :code="`echo 'blacklist pcspkr
blacklist snd_pcsp' | sudo tee /etc/modprobe.d/blacklist-pcspkr.conf
sudo update-initramfs -u`"/>
                <text>
                    重启后生效
                </text>


                <n-li>安装百度网盘后磁盘多出一个网盘图标</n-li>
                <n-code show-line-numbers
                        class="code-bg"
                        language="bash"
                        :code="`sudo rm /usr/share/dde-file-manager/extensions/appEntry/uos_baidunetdiskv.desktop`"/>


                <n-li>系统时间错误</n-li>
                <text>修改系统默认时区</text>
                <n-code show-line-numbers
                        class="code-bg"
                        language="bash"
                        :code="`sudo ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime`"/>


                <n-li>蓝牙消失</n-li>
                <text>
                    找到<span class="grey-bg">系统监视器 -> 系统服务 -> bluetooth</span>，右键重启即可
                </text>


                <n-li>windows分区不可写</n-li>
                <text>
                    进入windows，关闭<span class="grey-bg">快速启动</span>，重启即可
                </text>


                <n-li>Linux QQ有些表情不能正常显示</n-li>
                <text>
                    参考
                    <n-a href="https://blog.csdn.net/weixin_43640082/article/details/113242890" target="_blank">
                        这篇文章
                    </n-a>
                </text>
            </n-ol>
        </div>
    </div>
</template>

<script>
import {NH1, NH2, NOl, NLi, NDivider, NCode, NA, NText} from "naive-ui";

export default {
    name: "ArchiveOne",
    components: {
        NH1,
        NH2,
        NOl,
        NLi,
        NCode,
        NA,
        NDivider,
        NText
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