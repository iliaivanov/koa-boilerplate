const Router = require('koa-router')
const router = new Router()
const Task = require('../models/task')

router.get('/api/tasks', async (ctx) => {
  try {
    ctx.body = await Task.findAll()
  } catch (err) {
    ctx.body = {
      error: err,
    }
  }
})

router.get('/api/tasks/:id', async (ctx) => {
  try {
    ctx.body = await Task.findOne({
      where: {
        id: ctx.params.id,
      },
    })
  } catch (err) {
    ctx.body = {
      error: err,
    }
  }
})

router.post('/api/task', async (ctx) => {
  if (!ctx.request.body.task_name) {
    ctx.body = {
      error: 'Invalid task provided',
    }
  } else {
    try {
      ctx.body = await Task.create(ctx.request.body)
    } catch (error) {
      ctx.body = {
        error,
      }
    }
  }
})

router.delete('/api/tasks/:id', async (ctx) => {
  try {
    ctx.body = await Task.destroy({
      where: {
        id: ctx.params.id,
      },
    })
  } catch (err) {
    ctx.body = {
      error: err,
    }
  }
})

router.put('/api/tasks/:id', async (ctx) => {
  if (!ctx.request.body.task_name) {
    ctx.body = {
      error: 'Invalid task provided',
    }
  } else {
    try {
      ctx.body = await Task.update(
        {
          task_name: ctx.request.body.task_name,
        },
        {
          where: {
            id: ctx.params.id,
          },
        }
      )
    } catch (error) {
      ctx.body = {
        error,
      }
    }
  }
})

module.exports = router
