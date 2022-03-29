<template>
  <div>
    <el-table :data="arrs">
      <el-table-column prop="title" label="文章标题"> </el-table-column>
      <el-table-column prop="name" label="作者"> </el-table-column>
      <el-table-column prop="num" label="浏览量"> </el-table-column>
      <el-table-column prop="text" label="回复"> </el-table-column>
      <el-table-column label="操作">
        <!-- 编辑删除 -->
        <template slot-scope="scope" style="display: flex">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
        <!--  -->
      </el-table-column>
    </el-table>
    <!-- 增加按钮 -->
    <!-- 弹窗 -->
    <el-dialog
      :title="i === 1 ? '添加用户' : '编辑'"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="文本" :label-width="formLabelWidth">
          <el-input v-model="form.text" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click=" handleDelete()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
  <!-- 弹出 -->
</template>
<script>
import axios from "axios"
export default {
  name: "liebiao",
  data() {
    return {
      arrs: null,
      form: {
        title: "0",
        name: "张三",
        num:"",
        text: "塞军",
      },
      formLabelWidth: "100px",
    };
  },
  methods: {
    handleDelete(a, b) {
      // 用户行为
      console.log(a, b); //
      this.$confirm("您确定删除该条信息吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 确定的回调函数
          console.log("删除了");
          this.deleteHomeIndex(a);
        })
        .catch(() => {
          // 取消的回调函数
          console.log("你取消了");
        });
    },
    async getHomeIndex() {
      let { data } = await axios.get("/api/homeindex");
      console.log(data);
      this.arrs = data;
    },
    // 删除业务
    async deleteHomeIndex(index) {
      let { data } = await axios.delete("/api/homeindex/" + index);
      console.log(data);
      this.getHomeIndex();
    },
  },
  created() {
    this.getHomeIndex();
  },
};
</script>
<style scoped>
.el-button {
  width: 50px;
}
.addbtn {
  float: right;
  margin-right: 140px;
  margin-top: 40px;
  width: 100px;
}
</style>