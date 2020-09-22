import {
  AuthenticateFn, AuthenticationBindings,
  AUTHENTICATION_STRATEGY_NOT_FOUND, USER_PROFILE_NOT_FOUND
} from '@loopback/authentication';
import {inject} from '@loopback/core';
import {
  FindRoute, InvokeMethod, ParseParams, Reject, RequestContext,
  Send, SequenceActions, SequenceHandler
} from '@loopback/rest';



export class MySequence implements SequenceHandler {
  constructor(

    @inject(AuthenticationBindings.AUTH_ACTION)
    protected authenticateRequest: AuthenticateFn,
    @inject(SequenceActions.FIND_ROUTE) protected findRoute: FindRoute,
    @inject(SequenceActions.PARSE_PARAMS) protected parseParams: ParseParams,
    @inject(SequenceActions.INVOKE_METHOD) protected invoke: InvokeMethod,
    @inject(SequenceActions.SEND) protected send: Send,
    @inject(SequenceActions.REJECT) protected reject: Reject

  ) {}
  async handle(context: RequestContext) {
    console.log('in handle')
    try {
      const {request, response} = context;
      response.set('Access-Control-Allow-Origin', '*')
      response.set('Access-Control-Allow-Methods', '*')
      response.set('Access-Control-Allow-Headers', '*')
      response.set('Access-Control-Allow-Headers', '*')
      response.set('Access-Control-Allow-Credentials', 'true')
      const route = this.findRoute(request);
      console.log('*****', response.getHeaders(), '*****')
      response.sendStatus(200)
      await this.authenticateRequest(request);

      const args = await this.parseParams(request, route);
      const result = await this.invoke(route, args);
      this.send(response, result);
    } catch (err) {
      if (
        err.code === AUTHENTICATION_STRATEGY_NOT_FOUND ||
        err.code === USER_PROFILE_NOT_FOUND
      ) {
        Object.assign(err, {statusCode: 401});
      }
      this.reject(context, err);
      return;
    }
  }
}

