import * as ast from "@babel/types";
import { ProtoServiceMethod } from "@cosmology/types";
import { GenericParseContext } from "../../encoding";
import { CommentBlockBuilder } from "../../utils";

/**
 *
 * @param context
 * @param service
 * @param methodKey e.g. "balance"
 * @param helperCreatorName e.g. "createGetBalance"
 * @returns
 */
export function createMsgHelperCreator(
    context: GenericParseContext,
    service: ProtoServiceMethod,
    helperCreatorName?: string
) {
    context.addUtil("buildTx");

    const callExpression = ast.callExpression(ast.identifier("buildTx"), [
        ast.objectExpression(
            [
                ast.objectProperty(
                    ast.identifier("msg"),
                    ast.identifier(service.requestType)
                ),
            ].filter(Boolean)
        ),
    ]);
    callExpression.typeParameters = ast.tsTypeParameterInstantiation([
        ast.tsTypeReference(ast.identifier(service.requestType)),
    ]);

    const exportDeclaration = ast.exportNamedDeclaration(
        ast.variableDeclaration("const", [
            ast.variableDeclarator(
                ast.identifier(helperCreatorName),
                callExpression
            ),
        ])
    );

    const commentBlock = new CommentBlockBuilder()
    .addLine(service.comment)
    .addLine(`@name ${helperCreatorName}`)
    .addLine(`@package ${context.ref.proto.package}`)
    .addLine(`@see proto service: ${context.ref.proto.package}.${service.name}`)
    .addLine(service.options?.deprecated ? '@deprecated' : null)
    .build();

    if (commentBlock) {
        exportDeclaration.leadingComments = [commentBlock];
    }

    return exportDeclaration;
}

/**
 *
 * @param context
 * @param service
 * @param methodKey e.g. "balance"
 * @param helperCreatorName e.g. "createGetBalance"
 * @param hookName e.g. "useGetBalance"
 * @returns
 */
export function createMsgHooks(
    context: GenericParseContext,
    service: ProtoServiceMethod,
    helperCreatorName?: string,
    hookName?: string
) {
    context.addUtil("buildUseMutation");

    const callExpression = ast.callExpression(
        ast.identifier("buildUseMutation"),
        [
            ast.objectExpression([
                ast.objectProperty(
                    ast.identifier("builderMutationFn"),
                    ast.identifier(helperCreatorName)
                ),
            ]),
        ]
    );
    callExpression.typeParameters = ast.tsTypeParameterInstantiation([
        ast.tsTypeReference(ast.identifier(service.requestType)),
        ast.tsTypeReference(ast.identifier(`Error`)),
    ]);
    const exportDeclaration = ast.exportNamedDeclaration(
        ast.variableDeclaration("const", [
            ast.variableDeclarator(ast.identifier(hookName), callExpression),
        ])
    );

    const commentBlock = new CommentBlockBuilder()
    .addLine(service.comment)
    .addLine(`@name ${hookName}`)
    .addLine(`@package ${context.ref.proto.package}`)
    .addLine(`@see proto service: ${context.ref.proto.package}.${service.name}`)
    .addLine(service.options?.deprecated ? '@deprecated' : null)
    .build();

    if (commentBlock) {
        exportDeclaration.leadingComments = [commentBlock];
    }

    return exportDeclaration;
}

/**
 *
 * @param context
 * @param service
 * @param methodKey e.g. "balance"
 * @param helperCreatorName e.g. "createGetBalance"
 * @param hookName e.g. "useGetBalance"
 * @returns
 */
export function createVueMsgHooks(
    context: GenericParseContext,
    service: ProtoServiceMethod,
    helperCreatorName?: string,
    hookName?: string
) {
    context.addUtil("buildUseVueMutation");

    const callExpression = ast.callExpression(
        ast.identifier("buildUseVueMutation"),
        [
            ast.objectExpression([
                ast.objectProperty(
                    ast.identifier("builderMutationFn"),
                    ast.identifier(helperCreatorName)
                ),
            ]),
        ]
    );
    callExpression.typeParameters = ast.tsTypeParameterInstantiation([
        ast.tsTypeReference(ast.identifier(service.requestType)),
        ast.tsTypeReference(ast.identifier(`Error`)),
    ]);
    const exportDeclaration = ast.exportNamedDeclaration(
        ast.variableDeclaration("const", [
            ast.variableDeclarator(ast.identifier(hookName), callExpression),
        ])
    );

    const commentBlock = new CommentBlockBuilder()
    .addLine(service.comment)
    .addLine(`@name ${hookName}`)
    .addLine(`@package ${context.ref.proto.package}`)
    .addLine(`@see proto service: ${context.ref.proto.package}.${service.name}`)
    .addLine(service.options?.deprecated ? '@deprecated' : null)
    .build();

    if (commentBlock) {
        exportDeclaration.leadingComments = [commentBlock];
    }

    return exportDeclaration;
}